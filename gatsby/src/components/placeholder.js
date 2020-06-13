import React from 'react'

import style from './placeholder.module.scss'

function TestBox(props){
  return(
    <>
      <div className={style.previewChannel} ref={props.placeholder_ref}>
        previewChannel
        {props.place_num}
      </div>
    </>
  )
}

export default TestBox
