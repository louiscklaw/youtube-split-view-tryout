import React from 'react'
import Plyr from 'plyr'

import GlobalContext from '../contexts/global-context'

function YoutubeCell(props){
  let random_id = `youtube_cell_id_${Math.random().toString().substring(2,10)}`
  let {box_pos, v_id, video_title} = props

  let {active_style} = React.useContext(GlobalContext)

  React.useEffect(()=>{
    console.log('should not see me !!!')
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      let p = new Plyr(document.querySelector(`#${random_id}`))
      p.on('ready', () => {
        console.log('player ready')
        p.play()
      })
      // p.addEventListener('ready', () =>{
      //   console.log("player ready")
      // })
    }
  },[])

  return(
    <div className={active_style.youtubeCellContainer}>
      <div className={active_style.testButton} data-position={box_pos}>{video_title}</div>
      <div
        id={random_id}
        className={active_style.player}
        data-plyr-provider="youtube"
        data-plyr-embed-id={v_id}
      >

      </div>
    </div>
  )
}

export default YoutubeCell