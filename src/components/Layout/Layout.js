import React from 'react'

import Footer from 'components/Footer'
import Navbar from 'components/Navbar'

import 'styles/index.scss'

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div style={{padding: '0 12px'}}>
        {
          children
        }
        <Footer />
      </div>
    </div>
  )
}
