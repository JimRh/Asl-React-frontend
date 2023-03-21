import React, { useState } from 'react';
import './register.css';
import { useNavigate } from 'react-router-dom';
function Login() {
  const [username,setusername]=useState('')
  const [password, setpassword] = useState('');
 

  const navigate=useNavigate()
  const handleusername=(event)=>{
    setusername(event.target.value)
  }
   

  const handlepassword = (event) => {
    setpassword(event.target.value);
  };



  const handlesubmit = (event) => {
    event.preventDefault();
    let data={
      "username":username,
      "password":password
    }
    console.log(data)
    fetch("http://localhost:8000/api/login-api",{
      method:"POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),

    }).then(res=>res.json()).then(data=>{localStorage.setItem('token', data.token)},navigate('/'))
   
    
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
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;