import classNames from 'classnames'
import React from 'react'

import styles from './Button.module.scss'

export default function Button({ btnType = 'primary', text, className, ...props }) {
  return (
    <button className={classNames(styles.Button, styles[`Button__${btnType}`], className)} {...props}>
      {text}
    </button>
  )
}
