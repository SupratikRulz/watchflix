import React from 'react'
import { Link } from 'gatsby'
import paths from 'constants/paths'

import Layout from 'components/Layout'

export default function Home() {
  return (
    <Layout>
      <p>Home</p>
      <Link to={paths.SIGN_IN} >Sign In</Link>
    </Layout>
  )
}
