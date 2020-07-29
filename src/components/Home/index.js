import React from 'react'
import { Link } from 'gatsby'
import paths from 'constants/paths'

export default function index() {
  return (
    <div>
      <p>Home</p>
      <Link to={paths.SIGN_IN} >Sign In</Link>
    </div>
  )
}
