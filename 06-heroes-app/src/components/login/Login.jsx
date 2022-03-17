import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

export const Login = () => {

  const { dispatch } = useContext(AuthContext)

  const navigate = useNavigate();

  const handleLogin = () => {
    const action = {
      type: types.login,
      payload: { name: 'jhankee', }
    }

    dispatch(action)

    navigate('/marvel', {
      replace: true
    })

  }



  return (
    <div className='conteiner mt-2'>
      <h1>Login Covid</h1>
      <hr />
      <button
        className='btn btn-lg btn-success'
        onClick={handleLogin}
      >
        Login
      </button>
    </div >
  )
}
