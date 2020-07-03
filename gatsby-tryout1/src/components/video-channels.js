import React from "react"
import VideoContainer from "./video-container"

import {checkIsNotUndefined} from '../utils/mixins'

function Loading() {
  return <>loading</>
}

function MainCanvas(props) {
  let {profile, pass_refs} = props
  let [active_vid, setActiveVid] = React.useState()

  React.useEffect(()=>{
    if (checkIsNotUndefined(profile[0])){
      let {channel_vid} = profile[0]
      setActiveVid(channel_vid)
    }
    console.log('video-channels.js',profile)
  },[props])

  return(
    <>
      <VideoContainer vid={active_vid} box_pos="0" pass_ref={pass_refs[0]}/>
    </>
  )

}

function VideoChannels(props){
  let [is_loading, setIsLoading] = React.useState(true)

  return(
    <>
      <MainCanvas {...props}/>
    </>
  )
}

export default VideoChannels
