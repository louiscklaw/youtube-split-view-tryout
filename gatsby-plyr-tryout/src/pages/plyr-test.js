import React from 'react'

import YoutubeCell from '../components/youtube-cell'

function PlyrTestPage(){
  return(
    <>
      plyr test page

      <YoutubeCell v_id={`KGBv8oT5lwk`} pos_id="main"/>
      <YoutubeCell v_id={`HOvxUsKHb8U`} pos_id="channel-2"/>
    </>
  )
}

export default PlyrTestPage