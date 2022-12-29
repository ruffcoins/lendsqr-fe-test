import React from 'react'
import LoginForm from './LoginForm'
import Logo from '../../assets/logo.png'
import Pablo from '../../assets/pablo.jpg'

const Login = () => {
  return (
    <div className='login-page'>

      <div className="login-left-side">
        <img src={Logo} alt='Logo' className='logo'/>
        <img src={Pablo} alt='Pablo' className='pablo'/>
      </div>

      <div className="login-right-side">
       <LoginForm />
      </div>

    </div>
  )
}

export default Login
