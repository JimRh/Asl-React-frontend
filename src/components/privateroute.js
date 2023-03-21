import React from 'react'
import { Navigate } from 'react-router-dom'
import useauth from '../useauth'
export default function PrivateRoute({children})
{
   let loggedin=useauth()
   console.log(loggedin)
   return loggedin ? children : <Navigate to='/login' />
}