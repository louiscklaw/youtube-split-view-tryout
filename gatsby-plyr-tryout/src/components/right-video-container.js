import React from 'react'

import style from './right-video-container.module.css'
import YoutubePlaceholder from './placeholder'

function RightVideoContainer(){
  return(
    <div className={style.test} id="right-video-container">
      {
        [2,3,4,5,6,7,8,9,10,11].map(x => {
          return(
            <YoutubePlaceholder data-placeholder-id={x} />
          )
        })
      }
    </div>
  )
}

export default RightVideoContainer
