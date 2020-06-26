import React from "react"

import style from "../scss/style.module.scss"
import ThemeContext from "../contexts/theme-context"
import FirebaseMixinsContext from '../contexts/firebase-mixins'

import { checkIsNotUndefined, isDefined } from "../utils/mixins"

function Footer(props) {
  let theme_context = React.useContext(ThemeContext)
  let active_style = checkIsNotUndefined(theme_context)
    ? theme_context.active_style
    : style

  let firebase_mixins_context = React.useContext(FirebaseMixinsContext)

  let {user_info} = isDefined(firebase_mixins_context)? firebase_mixins_context: ''

  let [user_id, setUserId] = React.useState('')
  React.useEffect(()=>{
    if (isDefined(user_info.raw_user)){
      setUserId(JSON.stringify(user_info.raw_user.uid))
    }
  },[user_info])

  return(
    <div className={active_style.footerCustom}>
      {user_id}
      {props.children}
    </div>
  )
}

export default Footer
