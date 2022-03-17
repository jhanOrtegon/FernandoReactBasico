import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

export const Login = () => {

  const { dispatch } = useContext(AuthContext)
  const { lastPath } = JSON.parse(localStorage.getItem('lastPath')) || '/marvel';
  const { parameters } = JSON.parse(localStorage.getItem('lastParameters')) || '';

  const lastPathParameters = `${lastPath}${parameters}`;
  const navigate = useNavigate();

  console.log(lastPathParameters);

  const handleLogin = () => {
    const action = {
      type: types.login,
      payload: { name: 'jhankee', }
    }

    dispatch(action)

    navigate(lastPathParameters, {
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
