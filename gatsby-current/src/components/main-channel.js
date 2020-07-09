import React from "react"

import ThemeContext from "~contexts/theme-context"
import ProfileContext from '~contexts/profile-context'

function MainChannel(props){
  const {active_style} = React.useContext(ThemeContext)
  let {current_profile} = React.useContext(ProfileContext)

  return(
    <>
      <div className={active_style.mainChannel} data-placeholder="0" ref={props.test_ref}>
        main channel
      </div>
    </>
  )
}

export default MainChannel