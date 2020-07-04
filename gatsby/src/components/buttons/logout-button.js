import React from "react"
import ThemeContext from "../../contexts/theme-context"

function LogoutButton(props) {
  let {active_style} = React.useContext(ThemeContext)

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
