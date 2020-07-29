import React from 'react'
import { Link } from 'gatsby'
import paths from 'constants/paths'

import Navbar from 'components/Navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <p>Home</p>
      <Link to={paths.SIGN_IN} >Sign In</Link>
    </>
  )
}
