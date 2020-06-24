import React from "react"

import style from "../../scss/style.module.scss"
import ThemeContext from "../../contexts/theme-context"
import { checkIsNotUndefined } from "../../utils/mixins"
import { resetWarningCache } from "prop-types"

function ResetButton(props) {
  let theme_context = React.useContext(ThemeContext)
  let active_style = checkIsNotUndefined(theme_context)
    ? theme_context.active_style
    : style

  return (
    <>
    </>
  )
}

export default ResetButton
