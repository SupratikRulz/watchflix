import classNames from 'classnames'
import React from 'react'

import styles from './StorySection.module.scss'

export default function StorySection({inverse, caption, subcaption, storyElement}) {
  return (
    <div className={styles.StorySection}>
      <div className={classNames(styles.StorySection__container, inverse && styles.StorySection__container_inverse)}>
        <div className={classNames(styles.StorySection__text_container, inverse && styles.StorySection__text_container_inverse)}>
          <h1 className={styles.StorySection__text_caption}>{caption}</h1>
          <p className={styles.StorySection__text_subcaption}>{subcaption}</p>
        </div>
        <div className={styles.StorySection__element_container}>
          {storyElement}
        </div>
      </div>
    </div>
  )
}
