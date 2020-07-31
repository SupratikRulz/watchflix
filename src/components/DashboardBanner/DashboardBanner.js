import React, { useState, useEffect } from 'react'

import tmdb from 'constants/tmdb'
import apiService from 'services/api'
import useWindowSize from 'hooks/useWindowSize'

import Play from 'images/play.svg'
import styles from './DashboardBanner.module.scss'

const POSTER_PATH_BASE = 'https://image.tmdb.org/t/p/original'

export default function DashboardBanner() {
  const [tile, setTile] = useState({})
  const {width} = useWindowSize()
  const isMobile = width <= 500

  useEffect(() => {
    (async function () {
      const {data: { results }} = await apiService.get(tmdb.fetchNetflixOriginals)
      setTile(results[Math.floor(Math.random() * results.length - 1)])
    })()
  }, [])



  return (
    <header className={styles.DashboardBanner}>
      <div className={styles.DashboardBanner__image_container}>
        {
          (tile?.backdrop_path || tile?.poster_path) &&
            <img src={`${POSTER_PATH_BASE}${isMobile ? tile?.poster_path : tile?.backdrop_path }`} className={styles.DashboardBanner__image}/>
        }
      </div>
      <div className={styles.DashboardBanner__contents}>
        <h1 className={styles.DashboardBanner__title}>
          { tile?.title || tile?.name || tile?.original_name }
        </h1>
        <div className={styles.DashboardBanner__button_container}>
          <button className={styles.DashboardBanner__button}><img src={Play} height="16px"/>Play</button>
          <button className={styles.DashboardBanner__button}>More Info</button>
        </div>
        <h2 className={styles.DashboardBanner__description}>
          { truncate(tile?.overview, 150) }
        </h2>
      </div>
    </header>
  )
}

function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + '...' : str
}
