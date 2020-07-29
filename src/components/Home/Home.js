import React from 'react'
import { Link } from 'gatsby'
import paths from 'constants/paths'

import Banner from 'components/Banner'
import Layout from 'components/Layout'

export default function Home() {
  return (
    <Layout>
      <Banner nodetails/>
      <p>Home</p>
      <Link to={paths.SIGN_IN} >Sign In</Link>
    </Layout>
  )
}
