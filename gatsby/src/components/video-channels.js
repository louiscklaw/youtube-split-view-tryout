import React from 'react'
import YoutubeCellContainer from './youtube-cell-container'


function VideoChannels(props){
  let {box_settings, active_style} = props

  let [canvas, setCanvas] = React.useState('')

  React.useEffect(()=>{
    setCanvas(
      <>
        {
          Object.keys(box_settings).map( channel_id => {
            let box_setting = box_settings[channel_id]
            let {box_pos} = box_setting

            return(
              <YoutubeCellContainer
                active_style={active_style}
                box_pos={box_pos}
                box_setting={box_setting}
              />
            )
          })
        }
      </>
    )
  },[box_settings])

  return(
    <>
      {canvas}
    </>
  )
}

export default VideoChannels