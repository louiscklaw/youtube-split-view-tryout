import React from 'react'
import YoutubeTile from './youtube-tile'

import style from './main-youtube.module.scss'

function MainYoutube(){
  return(
    <div className={style.main}>
      <YoutubeTile
        className={style.main.video}
        key={`title`}
        videoSrcURL={`https://www.youtube.com/embed/KGBv8oT5lwk`}
        videoTitle={`test title5`}
      ></YoutubeTile>

    </div>
  )
}

export default MainYoutube