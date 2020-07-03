import React from "react"

import style from "../scss/style.module.scss"
import ThemeContext from "../contexts/theme-context"
import { checkIsNotUndefined } from "../utils/mixins"

import ProfileContext from '../contexts/profile-context'

function MainChannel(props) {
  let theme_context = React.useContext(ThemeContext)
  let active_style = checkIsNotUndefined(theme_context)
    ? theme_context.active_style
    : style

  let profile_context = React.useContext(ProfileContext)
  let current_profile = checkIsNotUndefined(profile_context)
    ? profile_context.current_profile
    : {}

  return (
    <div className={active_style.mainChannel} data-placeholder="0" ref={props.test_ref}>
      main channel
    </div>
  )
}

export default MainChannel
