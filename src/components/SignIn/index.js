import React from 'react'
import { navigate } from 'gatsby'

import paths from 'constants/paths'
import firebase from 'services/firebase'

export default function SignIn() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  function onLogin(e) {
    e.preventDefault()
    firebase().login(email, password)
      .then(() => {
        navigate(paths.DASHBOARD)
      })
      .catch(() => alert('Error login'))
  }

  return (
    <>
      <div>
        Sign IN
      </div>
      <>
        <div>
          <div>
            <span>Email</span>
            <input value={email} type="text" onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div>
            <span>password</span>
            <input value={password} type="password" onChange={(e) => setPassword(e.target.value)}/>
          </div>
        </div>
        <button onClick={onLogin}>Login</button>
      </>
    </>
  )
}
