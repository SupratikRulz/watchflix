import classNames from 'classnames'
import React, { useEffect, useState } from 'react'

import apiService from 'services/api'

import movieTrailer from 'movie-trailer'
import Youtube from 'react-youtube'

import styles from './Reels.module.scss'

const POSTER_PATH_BASE = 'https://image.tmdb.org/t/p/original'

export default function Reels({ title, fetchURL, xl = false, setSelectedReel }) {
  const [tiles, setTiles] = useState([])
  const [trailerUrl, setTrailerUrl] = useState("")
  
  const opts = {
    height: '390',
    width: '50%',
    playerVars: {
      autoplay: 1,
    }
  }

  useEffect(() => {
    async function fetchTileData() {
      const {data: { results }} = await apiService.get(fetchURL)
      setTiles(results)
    }

    fetchTileData()

    return () => setTiles([])
  }, [fetchURL])


  function handleTileClick(selectedTile) {
    movieTrailer(selectedTile?.name || selectedTile?.original_name || selectedTile.title)
      .then(url => {
        const urlParams = new URLSearchParams(new URL(url).search)
        setTrailerUrl(urlParams.get('v'))
        setSelectedReel({trailerUrl: urlParams.get('v'), title })
      })
      .catch(error => {
        console.log(error)
        alert('This video does not exist!')
        setSelectedReel({})
      })
  }

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
              onClick={() => handleTileClick(tile)}
            />
          )
        }
      </div>
      {/* {
        trailerUrl &&
        <div className={styles.Reels__youtube}>
          <Youtube videoId={trailerUrl} opts={opts} />
        </div>
      } */}
    </div>
  )
}
