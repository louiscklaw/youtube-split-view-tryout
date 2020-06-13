import React from 'react'
import Plyr from 'plyr'

import GlobalContext from '../contexts/global-context'

function YoutubeCell(props){
  let random_id = `youtube_cell_id_${Math.random().toString().substring(2,10)}`
  let {pos_id, v_id} = props

  let {active_style} = React.useContext(GlobalContext)

  React.useEffect(()=>{
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      // const Plyr = require('plyr');

      // Array.from(document.querySelectorAll(`.${style.player}`)).map(p => new Plyr(p));
      new Plyr(document.querySelector(`#${random_id}`))

    }
  })

  return(
    <div className={active_style.youtubeCellContainer}>
      <div className={active_style.testButton} data-position={pos_id}>
        button
      </div>
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