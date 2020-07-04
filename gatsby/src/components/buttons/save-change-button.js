import React from "react"

import ThemeContext from "../../contexts/theme-context"
import GlobalContext from '../../contexts/global-context'

function SaveChangesButton(props) {
  let {active_style} = React.useContext(ThemeContext)
  let {combineStyle} = React.useContext(GlobalContext)

  return (
    <input
      type="submit"
      className={combineStyle([active_style.button, active_style.isSuccess])}
      {...props}
     />
  )
}

export default SaveChangesButton
