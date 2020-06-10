import React from 'react'

import style from './youtube-cell.module.scss'

function YoutubeCell(props){
  React.useEffect(()=>{
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const Plyr = require('plyr');
      Array.from(document.querySelectorAll(`.${style.player}`)).map(p => new Plyr(p));

    }
  })

  return(
    <div>
      <div className={style.testButton} data-position={props.pos_id}>
        button
      </div>
      <div
        className={style.player}
        data-plyr-provider="youtube"
        data-plyr-embed-id="bTqVqk7FSmY"
      >

      </div>
    </div>
  )
}

export default YoutubeCell