import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const navigate = useNavigate();
  return (
    <div className='conteiner mt-2'>
      <h1>Login Covid</h1>
      <hr />
      <button 
        className='btn btn-lg btn-success'
        onClick={()=>navigate('/marvel',{
          replace:true
        })}
      >
        Login
      </button>
    </div>
  )
}
