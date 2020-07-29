import React from 'react'

import BannerImage from 'images/banner.jpg'
import styles from './Banner.module.scss'

export default function Banner({ nodetails }) {

  return nodetails && (
    <div className={styles.Banner}>
        <div className={styles.Banner__image__container}>
          <img src={BannerImage} className={styles.Banner__image}/>
          <div className={styles.Banner__image__gradient}></div>
        </div>
    </div>
  )
}
