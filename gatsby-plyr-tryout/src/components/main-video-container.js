import React from 'react'

// import YoutubeCell from './youtube-cell'

import MainPlaceholder from './main-placeholder'

import style from './main-video-container.module.css'

function MainVideoContainer(){
  return(
    <div className={style.test} id="main-youtube-cell">
      <MainPlaceholder />
    </div>
  )
}

export default MainVideoContainer