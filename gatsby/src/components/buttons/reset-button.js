import React from "react"

import style from "../../scss/style.module.scss"

import GlobalContext from "../../contexts/global-context"
import ThemeContext from "../../contexts/theme-context"

import { checkIsNotUndefined } from "../../utils/mixins"

function ResetButton() {
  let theme_context = React.useContext(ThemeContext)
  let active_style = checkIsNotUndefined(theme_context)
    ? theme_context.active_style
    : style

  return (
    <button type="reset" className={active_style.button}>
      Reset
    </button>
  )
}

export default ResetButton
