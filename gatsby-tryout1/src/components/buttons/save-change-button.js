import React from "react"

import style from "../../scss/style.module.scss"
import ThemeContext from "../../contexts/theme-context"
import { combineStyle, checkIsNotUndefined } from "../../utils/mixins"

function SaveChangesButton(props) {
  let theme_context = React.useContext(ThemeContext)
  let active_style = checkIsNotUndefined(theme_context)
    ? theme_context.active_style
    : style

  return (
    <input
      type="submit"
      className={combineStyle([active_style.button, active_style.isSuccess])}
      {...props}
     />
  )
}

export default SaveChangesButton
