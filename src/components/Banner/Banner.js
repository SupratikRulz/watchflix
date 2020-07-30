import classNames from 'classnames'
import { navigate } from 'gatsby'
import React, {useState, useRef} from 'react'

import Button from 'components/Button'

import paths from 'constants/paths'

import BannerImage from 'images/banner.jpg'
import styles from './Banner.module.scss'

export default function Banner({ nodetails }) {
  const [email, setEmail] = useState('')
  const [labelPositionActive, setLabelPositionActive] = useState(false)
  const emailInputRef = useRef(null)

  function navigateToRegister(e) {
    e.preventDefault()
    navigate(`${paths.REGISTER}?email=${email}`)
  }

  return nodetails && (
    <div className={styles.Banner}>
        <div className={styles.Banner__image__container}>
          <img src={BannerImage} className={styles.Banner__image}/>
          <div className={styles.Banner__image__gradient}></div>
          <div className={styles.Banner__form_conatiner}>
            <h1>
              <p>Unlimited</p>
              <span>
                Hollywood,
                <br />
                Bollywood &amp; more.
              </span>
            </h1>
            <div>
              <form className={styles.Banner__form}>
                <div className={styles.Banner__form_input_container}>
                  <label className={classNames(styles.Banner__form_input_label, (email || labelPositionActive) && styles.Banner__form_input_label_active)} onClick={() => emailInputRef.current.focus()}>Email address</label>
                  <input type="text" value={email} className={styles.Banner__form_input} onChange={(e) => setEmail(e.target.value)} onFocus={() => setLabelPositionActive(true)} onBlur={() => setLabelPositionActive(false)} ref={emailInputRef}/>
                </div>
                <Button type="primary" text="Get Started" className={styles.Banner__form_button} onClick={navigateToRegister}/>
              </form>
              <p>
                Ready to watch? Enter your email to start free membership.
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}
