'use client'

import React from 'react'
import '../../styles/home/Landing2.css'

const background = '/background/background4.mp4'

function Landing2() {
  return (
    <div className="landing2-container">
      <video
        className="landing2-video"
        src={background}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />
      <div className="landing2-content">
        {/* your headline / text / buttons go here, on top of the video */}
      </div>
    </div>
  )
}

export default Landing2