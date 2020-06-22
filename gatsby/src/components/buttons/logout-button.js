import React from "react"

import style from "../../scss/style.module.scss"

import ThemeContext from "../../contexts/theme-context"

import { checkIsNotUndefined } from "../../utils/mixins"
import { firebaseLogout } from "../../utils/firebase"

function LogoutButton(props) {
  let theme_context = React.useContext(ThemeContext)
  let active_style = checkIsNotUndefined(theme_context)
    ? theme_context.active_style
    : style

  const handleLogoutOnClick = e => {
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
