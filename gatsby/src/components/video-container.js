import React from 'react'
import YoutubeCell from './youtube-cell'

function VideoContainer(props){
  let {active_style,box_pos, box_setting} = props

  React.useEffect(()=>{
    console.log('youtubecellcontaienr logging test')
    console.log(props)
  })


  return(
    <div
      className={active_style.box1}
      data-position={box_pos}
    >
      <YoutubeCell box_setting={box_setting}/>
    </div>
  )
}

export default VideoContainer