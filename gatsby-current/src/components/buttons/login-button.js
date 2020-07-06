import React from "react"
import ThemeContext from "../../contexts/theme-context"

function LoginButton(props) {
  let {active_style} = React.useContext(ThemeContext)

  return (
    <button className={active_style.button} {...props}>
      Login
    </button>
  )
}

export default LoginButton
