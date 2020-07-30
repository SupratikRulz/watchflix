import React from 'react'

import MobileImage from 'images/image-mobile.jpg'
import DownloadIcon from 'images/download-icon.gif'
import Thumbnail from 'images/image-mobile-boxshot.png'

export default function Mobile() {
  return (
    <div style={{position: 'relative', textAlign: 'center'}}>
      <img src={MobileImage} style={{position: 'relative'}}/>
      <div style={{
        padding: '8px 12px',
        backgroundColor: '#000000',
        border: '2px solid #222222',
        borderRadius: '.75em',
        width: '80%',
        maxWidth: '330px',
        top: '80%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        position: 'absolute',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: '#ffffff'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center'
        }}>
          <img src={Thumbnail} height="50px" width="auto" style={{marginRight: '8px'}}/>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              lineHeight: '1.25'
            }}
          >
            <div style={{fontSize: '.8em', marginBottom: '0'}}>Stranger Things</div>
            <div style={{fontSize: '.7em', color: '#0071eb', marginBottom: '0'}}>Downloading...</div>
          </div>
        </div>
        <img src={DownloadIcon} height="50px" width="auto"/>
      </div>
    </div>
  )
}
