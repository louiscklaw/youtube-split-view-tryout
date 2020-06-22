import React from "react"

import style from '../scss/style.module.scss'
import ThemeContext from '../contexts/theme-context'

import ModalContext from '../contexts/modals-context'

import {checkIsNotUndefined} from '../utils/mixins'


function Footer(props) {
  let theme_context = React.useContext(ThemeContext)
  let active_style = checkIsNotUndefined(theme_context)? theme_context.active_style : style

  return(
    <>
      footer
      {props.children}
    </>
  )
}

export default Footer
