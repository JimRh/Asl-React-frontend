import React, { useState, useEffect } from 'react';
import { Radio, RadioGroup, FormControlLabel, Button } from '@material-ui/core';
import './quiz.css';
import { useNavigate } from 'react-router-dom';
function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000").then(res=>res.json()).then(res=>setQuestions(res))

  },[])
  console.log(questions)

  const navigate=useNavigate()
  const handleAnswerChange = (event) => {

    setSelectedAnswers({ ...selectedAnswers, [event.target.name]: event.target.value});
  };

  const handleSubmit = () => {
    // Do something with selectedAnswers
    
    let transformedData = {
        "data": Object.keys(selectedAnswers).map(key => {
          return {
            "ques": parseInt(key),
            "ans": selectedAnswers[key]
          };
        })
      };
      console.log(transformedData);
    fetch("http://localhost:8000",{
    method:"POST",
    headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(transformedData),
    }).then(res=>res.json()).then(data=>navigate('/score', { state: { responseData: data }}))

    
    
  };
  const handlelogout=()=>{
    localStorage.clear()
    navigate('/login')
  }

  return (

    <div className="container">
      <h1> Quiz </h1>
      {questions?.Data?.map((item, index) => (
   <div className="question" key={index}>
   <h3>{item.question}</h3>
   <RadioGroup
     name={`${item.id}`}
     value={selectedAnswers[`${item.id}`] || ''}
     onChange={handleAnswerChange}
   >
     {item.ans.map((ansItem, ansIndex) => (
       <div className="answer" key={ansIndex}>
         <FormControlLabel
           value={ansItem.answer}
           control={<Radio />}
           label={ansItem.answer}
         />
       </div>
     ))}
   </RadioGroup>
 </div>
 
      ))}
     <Button className="submit-button" variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>
     <p>
     <Button className="submit-button" variant="contained" color="primary" onClick={handlelogout}>logout</Button>
     </p>
    </div>

    
  );
}


export default Quiz;