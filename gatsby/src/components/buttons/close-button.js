import React from 'react'
import GlobalContext from '../../contexts/global-context'

function CloseButton(props){
  const {active_style} = React.useContext(GlobalContext)

  return(
    <button className={active_style.button} {...props}>
      Close
    </button>
  )
}

export default CloseButton
