import { navigate } from 'gatsby'
import React from 'react'

import firebase from 'services/firebase'
import paths from 'constants/paths'

export default function Register() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [name, setName] = React.useState('')


  function onRegister(e) {
    e.preventDefault()
    firebase.register(name, email, password)
    .then(() => {
      navigate(paths.DASHBOARD)
    })
    .catch(() => alert('Error register'))
  }

  return (
    <>
      <div>
          Register
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
          <div>
            <span>name</span>
            <input value={name} type="text"  onChange={(e) => setName(e.target.value)}/>
          </div>
        </div>
        <button onClick={onRegister}>Register</button>
      </>
    </>
  )
}
