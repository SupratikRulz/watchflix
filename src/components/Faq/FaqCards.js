import classNames from 'classnames'
import React from 'react'

import styles from './Faq.module.scss'

export default function FaqCards({caption, description, id, show, toggleShowHide}) {
  return (
    <>
      <button className={styles.FaqCards__heading} onClick={toggleShowHide} data-id={id}>
        <div data-id={id}>{ caption }</div>
        <div data-id={id} className={classNames(styles.FaqCards__Cross, show && styles.FaqCards__rotate)}>+</div>
      </button>
      <div className={classNames(styles.FaqCards__description, show && styles.FaqCards__description_show)}>
        <span>{ description }</span>
      </div>
    </>
  )
}
