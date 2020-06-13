import React from 'react'

import style from './preview-channel.module.scss'

function PreviewChannel(props){
  let {placeholder} = props
  return(
    <div className={style.previewChannel} data-placeholder={placeholder} >
      previewChannel
    </div>
  )
}

export default PreviewChannel