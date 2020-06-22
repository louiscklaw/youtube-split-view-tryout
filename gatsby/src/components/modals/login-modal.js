import React from "react"

import style from "../../scss/style.module.scss"

import { combineStyle, checkIsNotUndefined } from "../../utils/mixins"

import ThemeContext from "../../contexts/theme-context"
import FirebaseMixinsContext from "../../contexts/firebase-mixins"
import { LOGGED_IN, LOGGED_OUT } from "../../constants/login"

import LoginForm from '../forms/login_form'

function LoginModal(props){
  let theme_context = React.useContext(ThemeContext)
  let active_style = checkIsNotUndefined(theme_context)? theme_context.active_style : style

  let firebase_mixins_context = React.useContext(FirebaseMixinsContext)
  let {user_info} = checkIsNotUndefined(firebase_mixins_context) ? firebase_mixins_context: {status: LOGGED_OUT}

  let [login_modal_classnames, setLoginModalClassnames] = React.useState([
    active_style.modal,
    active_style.isActive,
  ])

  React.useEffect(()=>{
    if (user_info.status == LOGGED_IN) {
      setLoginModalClassnames([active_style.modal])
      console.log("logged in catched")
    } else {
      setLoginModalClassnames([active_style.modal, active_style.isActive])
      console.log("login required")
    }
  },[user_info])


  return(
    <div className={combineStyle(login_modal_classnames)}>
      <div className={active_style.modalBackground}></div>
      <div className={active_style.modalCard}>
        <section className={active_style.modalCardBody}>
          <div className={active_style.container}>
            <LoginForm />
          </div>
        </section>
      </div>
    </div>
  )
}


export default LoginModal