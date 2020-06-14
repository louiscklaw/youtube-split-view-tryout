import React from 'react'

import GlobalContext from '../contexts/global-context'

function TestBox(props){
  let {active_style} = React.useContext(GlobalContext)
  return(
    <>
      <div className={active_style.previewChannel} ref={props.placeholder_ref}>
        previewChannel
        {props.place_num}
      </div>
    </>
  )
}

export default TestBox
