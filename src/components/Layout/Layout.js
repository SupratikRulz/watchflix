import React from 'react'

import Footer from 'components/Footer'
import Navbar from 'components/Navbar'

import 'styles/index.scss'

export default function Layout({ children }) {
  return (
    <div style={{minHeight: 'calc(100vh - 10px)'}}>
      <Navbar />
      {
        children
      }
      <Footer />
    </div>
  )
}
