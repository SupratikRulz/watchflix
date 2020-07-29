import classNames from 'classnames'
import React, {useEffect, useState} from 'react'

import Button from 'components/Button'

import Logo from 'images/watchflix-logo.png'
import styles from './Navbar.module.scss'

export default function Navbar() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', showBackground)

    return () => window.removeEventListener('scroll', showBackground)
  }, [])

  function showBackground() {
    if (window.scrollY > 64) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  return (
    <nav className={classNames(styles.Navbar, show && styles.Navbar__dark)}>
      <img src={Logo} className={styles.Navbar__logo}/>
      <Button text="Sign In" type="primary" />
    </nav>
  )
}
