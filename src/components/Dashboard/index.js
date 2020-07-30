import { navigate } from 'gatsby'
import React from 'react'
import firebase from 'services/firebase'
import paths from 'constants/paths'

export default function index() {
  const name = typeof window !== 'undefined' && firebase().getCurrentUsername()

  function onLogout(e) {
    e.preventDefault()
    firebase().logout()
      .then(() => {
        navigate(paths.HOME)
        return null
      })
      .catch(() => alert('Error logout'))
  }

  return (
    <>
      <div>
        Dashboard
      </div>
      <div>
          <span> {name}</span>
      </div>
      <button onClick={onLogout}>Logout</button>
    </>
  )
}
