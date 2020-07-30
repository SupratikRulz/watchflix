import React from 'react'

import TvImage from 'images/image-tv.png'
import TvVideo from 'images/video-tv.mp4'

export default function Tv() {
  return (
    <div style={{position: 'relative', textAlign: 'center'}}>
      <img src={TvImage} style={{zIndex: '2', position: 'relative'}}/>
      <video autoPlay muted loop style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        maxWidth: '74%',
        maxHeight: '54%',
        top: '47%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        zIndex: '1',
      }}>
        <source src={TvVideo} />
      </video>
    </div>
  )
}
