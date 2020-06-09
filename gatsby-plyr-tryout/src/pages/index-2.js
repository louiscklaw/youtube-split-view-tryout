import React from 'react'

import MainVideoContainer from '../components/main-video-container'
import BottomVideoContainer from '../components/bottom-video-container'
import RightVideoContainer from '../components/right-video-container'

import style from './index.module.css'

import YoutubeCell from '../components/youtube-cell'

function IndexPage(){
  return(
    <>
      <div className={style.videoContainerRow}>

        <div className={style.videoContainerColumn}>
          <MainVideoContainer />
          <BottomVideoContainer />
        </div>
        <RightVideoContainer />
      </div>
      <YoutubeCell v_id={`KGBv8oT5lwk`} pos_id="main"/>
      <YoutubeCell v_id={`HOvxUsKHb8U`} pos_id="channel-2"/>
    </>
  )
}

export default IndexPage