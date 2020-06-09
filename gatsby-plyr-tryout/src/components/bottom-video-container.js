import React from 'react'

import style from './bottom-video-container.module.css'
import YoutubePlaceholder from './placeholder'

function BottomVideoContainer(){
  return(
    <div className={style.test} id="bottom-video-container">
      {
        [12,13,14,15,16,17].map(x => {
          return(
            <YoutubePlaceholder data-placeholder-id={x} />
          )
        })
      }
    </div>
  )
}

export default BottomVideoContainer
