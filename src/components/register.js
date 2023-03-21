import React, { useState } from 'react';
import './register.css';
import { useNavigate } from 'react-router-dom';
function Register() {
  const [username,setusername]=useState('')
  const [email, setemail] = useState('');
  const [firstname,setfirstname]=useState('')
  const [lastname,setlastname]=useState('')
  const [password,setpassword]=useState('')
  
  const navigate=useNavigate()
  const handleusername=(event)=>{
    setusername(event.target.value)
  }
   
  const handlefirstname=(event)=>{
    setfirstname(event.target.value)
  }
  const handlelastname=(event)=>{
    setlastname(event.target.value)
  }
  const handleemail= (event) => {
    setemail(event.target.value);
  };

  const handlepassword = (event) => {
    setpassword(event.target.value);
  };



  const handlesubmit = (event) => {
    event.preventDefault();
    let data={
      "username":username,
      "first_name":firstname,
      "last_name":lastname,
      "email":email,
      "password":password
    }
    console.log(data)
    fetch("http://localhost:8000/api/register",{
      method:"POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),

    }).then(res=>res.json()).then(res=>console.log(res))
    navigate('/login')
  };

  return (
    <div className="register-page">
      <h1 className="register-page__heading">Register</h1>
      <form className="register-page__form" onSubmit={handlesubmit}>
      <label htmlFor="email" className="register-page__label">
          Username:
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleusername}
          className="register-page__input"
          required
        />
        <label htmlFor="email" className="register-page__label">
          FirstName:
        </label>
        <input
          type="text"
          id="FirstName"
          value={firstname}
          onChange={handlefirstname}
          className="register-page__input"
          required
        />
        <label htmlFor="email" className="register-page__label">
          LastName:
        </label>
        <input
          type="text"
          id="LastName"
          value={lastname}
          onChange={handlelastname}
          className="register-page__input"
          required
        />
        <label htmlFor="email" className="register-page__label">
          Email:
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleemail}
          className="register-page__input"
          required
        />

    <label htmlFor="password" className="register-page__label">
          Password:
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlepassword}
          className="register-page__input"
          required
        />

 

        <button type="submit" className="register-page__button">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;