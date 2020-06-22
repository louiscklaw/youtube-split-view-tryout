import React from "react"

import style from "../scss/style.module.scss"
import ThemeContext from '../contexts/theme-context'
import {checkIsNotUndefined} from './mixins'


function HelloworldPage() {
  let theme_context = React.useContext(ThemeContext)
  let active_style = checkIsNotUndefined(theme_context)? theme_context.active_style : style
  return <p className={active_style.test}>helloworld</p>
}

function LoadingPage() {
  return <>LoadingPage</>
}

export { LoadingPage, HelloworldPage }
