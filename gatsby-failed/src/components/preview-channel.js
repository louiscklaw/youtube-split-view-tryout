import React from 'react'

// import style from './preview-channel.module.scss'
import GlobalContext from '../contexts/global-context'

function PreviewChannel(props){
  let {active_style} = React.useContext(GlobalContext)
  let {placeholder} = props

  return(
    <div className={active_style.previewChannel} data-placeholder={placeholder} >
      previewChannel
    </div>
  )
}

export default PreviewChannel
