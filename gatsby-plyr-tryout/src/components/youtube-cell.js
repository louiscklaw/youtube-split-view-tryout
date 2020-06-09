import React from 'react'

import style from './youtube-cell.module.css'

const Plyr = require('plyr')

function YoutubeCell({pos_id, v_id}){
  let container_id = 'container_id_'+String(Math.random()).substring(2,10)
  let cell_id = 'cell_id_'+String(Math.random()).substring(2,10)


  React.useEffect(()=>{
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      // document.querySelectorAll(`.${container_id}`).map(p => new Plyr(p))
      let p = document.querySelector(`.${container_id}`)
      new Plyr(p)

      if (pos_id == 'main'){
        let main_cell = document.querySelector('#main-youtube-cell')
        let this_ele  = document.querySelector(`#${cell_id}`)
        this_ele.style.top=`${main_cell.offsetTop}px`
        this_ele.style.left=`${main_cell.offsetLeft}px`
        this_ele.style.height=`${main_cell.offsetHeight}px`
        this_ele.style.width=`${main_cell.offsetWidth}px`
      }

      if (pos_id == 'channel-2'){
        let placeholder_cell = document.querySelector('#youtube-placeholder')
        let this_ele  = document.querySelector(`#${cell_id}`)
        this_ele.style.top=`${placeholder_cell.offsetTop}px`
        this_ele.style.left=`${placeholder_cell.offsetLeft}px`
        this_ele.style.height=`${placeholder_cell.offsetHeight}px`
        this_ele.style.width=`${placeholder_cell.offsetWidth}px`
      }
    }
  }, []);

  return(
    <>
      <div className={style.test} id={cell_id}>
        <div
          className={container_id}
          data-plyr-provider="youtube"
          data-plyr-embed-id={v_id}
        />
      </div>
    </>
  )
}

export default YoutubeCell
