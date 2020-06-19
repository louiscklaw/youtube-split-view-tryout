import React from 'react'
import YoutubeCell from './youtube-cell'

function YoutubeCellContainer(props){
  React.useEffect(()=>{
    console.log('youtubecellcontaienr logging test')
  })
  let {active_style,box_pos, box_setting} = props
  return(
    <div
      className={active_style.box1}
      data-position={box_pos}
    >
      <YoutubeCell box_setting={box_setting}/>
    </div>
  )
}

export default YoutubeCellContainer