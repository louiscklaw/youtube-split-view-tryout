import React from "react"

import style from "../scss/style.module.scss"
import ThemeContext from "../contexts/theme-context"
import { checkIsNotUndefined } from "../utils/mixins"

function PreviewChannel(props) {
  let theme_context = React.useContext(ThemeContext)
  let active_style = checkIsNotUndefined(theme_context)
    ? theme_context.active_style
    : style

  let { placeholder } = props

  return (
    <div className={active_style.previewChannel} data-placeholder={placeholder}>
      previewChannel
    </div>
  )
}

export default PreviewChannel
