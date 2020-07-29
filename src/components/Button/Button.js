import classNames from 'classnames'
import React from 'react'

import styles from './Button.module.scss'

export default function Button({ type = 'primary', text, className, ...props }) {
  return (
    <button className={classNames(styles.Button, styles[`Button__${type}`], className)} {...props}>
      {text}
    </button>
  )
}
