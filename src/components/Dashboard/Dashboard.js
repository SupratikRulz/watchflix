import { navigate } from 'gatsby'
import React from 'react'


import Layout from 'components/Layout'
import Reels from 'components/Reels'

import firebase from 'services/firebase'
import paths from 'constants/paths'
import tmdb from 'constants/tmdb'

import styles from './Dashboard.module.scss'

export default function Dashboard() {
  const name = typeof window !== 'undefined' && firebase().getCurrentUsername()

  function onLogout(e) {
    e.preventDefault()
    firebase().logout()
      .then(() => {
        navigate(paths.HOME)
        return null
      })
      .catch(() => alert('Error logout'))
  }

  return (
    <Layout>
      <div className={styles.Dashboard}>
        <span> {name}</span>
        <button onClick={onLogout}>Logout</button>
        <Reels title="Trending Now" fetchURL={tmdb.fetchTrending}/>
        <Reels title="Netflix Originals" fetchURL={tmdb.fetchNetflixOriginals} xl/>
        <Reels title="Top Rated" fetchURL={tmdb.fetchTopRated}/>
        <Reels title="Action Movies" fetchURL={tmdb.fetchActionMovies}/>
        <Reels title="Comedy Movies" fetchURL={tmdb.fetchComedyMovies}/>
        <Reels title="Horror Movies" fetchURL={tmdb.fetchHorrorMovies}/>
        <Reels title="Romance Movies" fetchURL={tmdb.fetchRomanceMovies}/>
        <Reels title="Documentaries" fetchURL={tmdb.fetchDocumentariesMovies}/>
      </div>
    </Layout>
  )
}
