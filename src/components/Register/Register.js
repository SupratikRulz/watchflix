import classNames from 'classnames'
import React, {useState, useRef} from 'react'
import { navigate, Link } from 'gatsby'

import Button from 'components/Button'
import Layout from 'components/Layout'

import paths from 'constants/paths'
import firebase from 'services/firebase'

import BannerImage from 'images/banner-other.jpg'
import styles from './Register.module.scss'

export default function Register(props) {
  const [name, setName] = React.useState('')
  const [email, setEmail] = useState(props.email || '')
  const [password, setPassword] = React.useState('')
  const [labelPositionActive, setLabelPositionActive] = useState(false)
  const [labelPositionActivePassword, setLabelPositionActivePassword] = useState(false)
  const [labelPositionActiveName, setLabelPositionActiveName] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const emailInputRef = useRef(null)
  const passwordInputRef = useRef(null)
  const nameInputRef = useRef(null)

  function togglePasswordShowHide() {
    setShowPassword(!showPassword)
  }

  function onRegister(e) {
    e.preventDefault()
    firebase().register(name, email, password)
    .then(() => {
      navigate(paths.DASHBOARD)
    })
    .catch(() => alert('Error register'))
  }

  return (
    <Layout>
      <div className={styles.SignIn}>
        <img src={BannerImage} className={styles.SignIn__Image}/>
        <div className={styles.SignIn__form}>
          <h2 className={styles.SignIn__form_header}>Sign Up</h2>
          <div className={styles.SignIn__form_input_container}>
            <label className={classNames(styles.SignIn__form_input_label, (email || labelPositionActive) && styles.SignIn__form_input_label_active)} onClick={() => emailInputRef.current.focus()}>Email address</label>
            <input type="email" pattern="[^\s@]+@[^\s@]+\.[^\s@]+" value={email} className={styles.SignIn__form_input} onChange={(e) => setEmail(e.target.value)} onFocus={() => setLabelPositionActive(true)} onBlur={() => setLabelPositionActive(false)} ref={emailInputRef} required/>
          </div>
          <br />
          <div className={styles.SignIn__form_input_container}>
            <label className={classNames(styles.SignIn__form_input_label, (password || labelPositionActivePassword) && styles.SignIn__form_input_label_active)} onClick={() => passwordInputRef.current.focus()}>Password</label>
            <label className={styles.SignIn__form_input_label_show_hide} onClick={togglePasswordShowHide}>{showPassword ? 'Hide' : 'Show'}</label>
            <input type={showPassword ? "text" : "password"} value={password} className={classNames(styles.SignIn__form_input, styles.SignIn__form_input_password)} onChange={(e) => setPassword(e.target.value)} onFocus={() => setLabelPositionActivePassword(true)} onBlur={() => setLabelPositionActivePassword(false)} ref={passwordInputRef} required/>
          </div>
          <br />
          <div className={styles.SignIn__form_input_container}>
            <label className={classNames(styles.SignIn__form_input_label, (name || labelPositionActiveName) && styles.SignIn__form_input_label_active)} onClick={() => nameInputRef.current.focus()}>Username</label>
            <input type="text" value={name} className={styles.SignIn__form_input} onChange={(e) => setName(e.target.value)} onFocus={() => setLabelPositionActiveName(true)} onBlur={() => setLabelPositionActiveName(false)} ref={nameInputRef} required/>
          </div>
          <br />
          <Button text="Register" onClick={onRegister} className={styles.SignIn__form_button}/>
          <p className={styles.SignIn__form_new}>Already have Watchflix account?&nbsp; <Link to={paths.SIGN_IN} className={styles.SignIn__form_register}>Sign in here.</Link></p>
        </div>
      </div>
    </Layout>
  )
}
