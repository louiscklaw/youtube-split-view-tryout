import React from 'react'

// import style from './preview-channel.module.scss'
import GlobalContext from '../contexts/global-context'

function PreviewChannel(props){
  let {placeholder} = props

  let {active_style} = React.useContext(GlobalContext)

  return(
    <div className={active_style.previewChannel} data-placeholder={placeholder} >
      previewChannel
    </div>
  )
}

export default PreviewChannel