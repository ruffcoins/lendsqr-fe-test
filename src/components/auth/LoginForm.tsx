import React, { useState } from 'react'
import LoginButton from '../buttons/LoginButton'

const LoginForm = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  return (
    <form>
      <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
      <LoginButton />
    </form>
  )
}

export default LoginForm
