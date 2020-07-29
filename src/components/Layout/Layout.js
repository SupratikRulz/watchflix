import React from 'react'

import Footer from 'components/Footer'
import Navbar from 'components/Navbar'

import 'styles/index.scss'

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {
        children
      }
      <Footer />
    </div>
  )
}
