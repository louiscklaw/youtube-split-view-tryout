import React from 'react'

import style from './right-video-container.module.css'
import YoutubePlaceholder from './placeholder'

function RightVideoContainer(){
  return(
    <div className={style.test} id="right-video-container">
      {
        <YoutubePlaceholder data-placeholder-id="2"/>

      }

    </div>
  )
}

export default RightVideoContainer
