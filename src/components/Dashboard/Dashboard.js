import { navigate } from 'gatsby'
import React, {useState} from 'react'
import Youtube from 'react-youtube'


import DashboardBanner from 'components/DashboardBanner'
import Layout from 'components/Layout'
import Reels from 'components/Reels'

import useWindowSize from 'hooks/useWindowSize'
import firebase from 'services/firebase'
import paths from 'constants/paths'
import tmdb from 'constants/tmdb'


import styles from './Dashboard.module.scss'

export default function Dashboard() {
  const [selectedReel, setSelectedReel] = useState({})
  const {width} = useWindowSize()
  const name = typeof window !== 'undefined' && firebase().getCurrentUsername()
  const opts = {
    width: '100%',
    height: String(0.57 * width),
    playerVars: {
      autoplay: 1,
    }
  }

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
      <DashboardBanner />
      <div className={styles.Dashboard}>
        {/* <span> {name}</span>
        <button onClick={onLogout}>Logout</button> */}
        <Reels title="Trending Now" fetchURL={tmdb.fetchTrending} setSelectedReel={setSelectedReel}/>
        { selectedReel.title === 'Trending Now' && selectedReel.trailerUrl && <div style={{display: 'flex',}}><div style={{width: '50%'}}>Movie Name</div><div style={{width: '50%'}}><Youtube videoId={selectedReel.trailerUrl} opts={opts} /></div></div> }
        <Reels title="Netflix Originals" fetchURL={tmdb.fetchNetflixOriginals} setSelectedReel={setSelectedReel} xl/>
        { selectedReel.title === 'Netflix Originals' && selectedReel.trailerUrl && <Youtube videoId={selectedReel.trailerUrl} opts={opts} /> }
        <Reels title="Top Rated" fetchURL={tmdb.fetchTopRated} setSelectedReel={setSelectedReel}/>
        { selectedReel.title === 'Top Rated' && selectedReel.trailerUrl && <Youtube videoId={selectedReel.trailerUrl} opts={opts} /> }
        <Reels title="Action Movies" fetchURL={tmdb.fetchActionMovies} setSelectedReel={setSelectedReel}/>
        { selectedReel.title === 'Action Movies' && selectedReel.trailerUrl && <Youtube videoId={selectedReel.trailerUrl} opts={opts} /> }
        <Reels title="Comedy Movies" fetchURL={tmdb.fetchComedyMovies} setSelectedReel={setSelectedReel}/>
        { selectedReel.title === 'Comedy Movies' && selectedReel.trailerUrl && <Youtube videoId={selectedReel.trailerUrl} opts={opts} /> }
        <Reels title="Horror Movies" fetchURL={tmdb.fetchHorrorMovies} setSelectedReel={setSelectedReel}/>
        { selectedReel.title === 'Horror Movies' && selectedReel.trailerUrl && <Youtube videoId={selectedReel.trailerUrl} opts={opts} /> }
        <Reels title="Romance Movies" fetchURL={tmdb.fetchRomanceMovies} setSelectedReel={setSelectedReel}/>
        { selectedReel.title === 'Romance Movies' && selectedReel.trailerUrl && <Youtube videoId={selectedReel.trailerUrl} opts={opts} /> }
        <Reels title="Documentaries" fetchURL={tmdb.fetchDocumentariesMovies} setSelectedReel={setSelectedReel}/>
        { selectedReel.title === 'Documentaries' && selectedReel.trailerUrl && <Youtube videoId={selectedReel.trailerUrl} opts={opts} /> }
      </div>
    </Layout>
  )
}
