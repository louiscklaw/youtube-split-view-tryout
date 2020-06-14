import React from 'react'
import GlobalContext from '../../contexts/global-context'

function CancelButton(props){
  const {active_style} = React.useContext(GlobalContext)

  return(
    <button className={active_style.button} {...props}>
      Cancel
    </button>
  )
}

export default CancelButton
