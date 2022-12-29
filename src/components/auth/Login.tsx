import React from 'react'
import LoginForm from './LoginForm'
import Logo from '../../assets/logo.png'

const Login = () => {
  return (
    <div className='login-page'>
      <div>
        <img src={Logo} alt='Logo' />
      </div>
      <LoginForm />
    </div>
  )
}

export default Login
