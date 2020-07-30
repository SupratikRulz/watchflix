import React from 'react'

import DevicePileImage from 'images/image-device-pile.png'
import DevicePileVideo from 'images/video-devices-pile.mp4'

export default function DevicePile() {
  return (
    <div style={{position: 'relative', textAlign: 'center'}}>
      <img src={DevicePileImage} style={{zIndex: '2', position: 'relative'}}/>
      <video autoPlay muted loop style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        maxWidth: '63%',
        maxHeight: '47%',
        top: '34%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        zIndex: '1',
      }}>
        <source src={DevicePileVideo} type="video/mp4"/>
      </video>
    </div>
  )
}
