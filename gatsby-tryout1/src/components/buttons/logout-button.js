import React from "react"

import style from "../../scss/style.module.scss"

import ThemeContext from "../../contexts/theme-context"
import { checkIsNotUndefined } from "../../utils/mixins"
import { firebaseLogout } from "../../utils/firebase"

import ProfileContext from '../../contexts/profile-context'

function LogoutButton(props) {
  let theme_context = React.useContext(ThemeContext)
  let active_style = checkIsNotUndefined(theme_context)
    ? theme_context.active_style
    : style


  let profile_context = React.useContext(ProfileContext)
  const handleLogoutOnClick = e => {
    if (checkIsNotUndefined(profile_context)){
      let {clearCurrentProfile} = profile_context
      clearCurrentProfile()
    }
    firebaseLogout()
  }

  return (
    <button
      className={active_style.button}
      {...props}
      onClick={handleLogoutOnClick}
    >
      Logout
    </button>
  )
}

export default LogoutButton
