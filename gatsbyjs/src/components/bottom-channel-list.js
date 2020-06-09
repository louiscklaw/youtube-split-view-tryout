import React from 'react'

import YoutubeTile from './youtube-tile'

import style from './bottom-channel-list.module.scss'

function BottomChannelList(){
  return(
    <div className={style.bottomChannelList}>
      <YoutubeTile
        key={`title`}
        videoSrcURL={`https://www.youtube.com/embed/KGBv8oT5lwk`}
        videoTitle={`test title5`}
      ></YoutubeTile>
      <YoutubeTile
        key={`title`}
        videoSrcURL={`https://www.youtube.com/embed/KGBv8oT5lwk`}
        videoTitle={`test title5`}
      ></YoutubeTile>

<YoutubeTile
        key={`title`}
        videoSrcURL={`https://www.youtube.com/embed/KGBv8oT5lwk`}
        videoTitle={`test title5`}
      ></YoutubeTile>
      <YoutubeTile
        key={`title`}
        videoSrcURL={`https://www.youtube.com/embed/KGBv8oT5lwk`}
        videoTitle={`test title5`}
      ></YoutubeTile>
      <YoutubeTile
        key={`title`}
        videoSrcURL={`https://www.youtube.com/embed/KGBv8oT5lwk`}
        videoTitle={`test title5`}
      ></YoutubeTile>
      <YoutubeTile
        key={`title`}
        videoSrcURL={`https://www.youtube.com/embed/KGBv8oT5lwk`}
        videoTitle={`test title5`}
      ></YoutubeTile>
    </div>
  )
}

export default BottomChannelList