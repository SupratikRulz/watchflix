import classNames from 'classnames'
import React, { useEffect, useState } from 'react'

import apiService from 'services/api'

import styles from './Reels.module.scss'

const POSTER_PATH_BASE = 'https://image.tmdb.org/t/p/original'

export default function Reels({ title, fetchURL, xl = false }) {
  const [tiles, setTiles] = useState([])

  useEffect(() => {
    async function fetchTileData() {
      const {data: { results }} = await apiService.get(fetchURL)
      setTiles(results)
    }

    fetchTileData()

    return () => setTiles([])
  }, [fetchURL])

  return (
    <div className={classNames(styles.Reels, xl && styles.Reels_xl)}>
      <h2 className={styles.Reels_title}>{title}</h2>
      <div className={styles.Reels__poster_container}>
        {
          tiles.map(tile => <img
              key={tile.id}
              className={classNames(styles.Reels__poster, xl && styles.Reels__poster_xl)}
              src={POSTER_PATH_BASE + (xl ? tile.poster_path : tile.backdrop_path)}
              alt={tile.name}
            />
          )
        }
      </div>
    </div>
  )
}
