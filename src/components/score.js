import React from 'react'
import { useLocation } from 'react-router-dom';
import './score.css'
const Score = () => {

  const location = useLocation();
  const responseData = location.state.responseData.score;
  console.log(responseData)
  return (
    <div className='container'>
        <h1>Quiz Score</h1>
        <p>{responseData}</p>
    </div>
  )
}

export default Score