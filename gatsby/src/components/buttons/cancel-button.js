import React from "react"

import style from '../../scss/style.module.scss'

import GlobalContext from "../../contexts/global-context"
import ThemeContext from '../../contexts/theme-context'

import {checkIsNotUndefined} from '../../utils/mixins'

function CancelButton(props) {
  let theme_context = React.useContext(ThemeContext)
  let active_style = checkIsNotUndefined(theme_context)? theme_context.active_style : style

  return (
    <input
      type="reset"
      value="Reset"
      className={active_style.button}
      {...props}
    />
  )
}

export default CancelButton
