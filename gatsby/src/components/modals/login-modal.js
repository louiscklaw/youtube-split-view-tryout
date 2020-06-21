import React from "react"
import _ from "lodash"

import ModalCloseButton from "../buttons/modal-close-button"

import LoginForm from "../forms/login_form"

import FirebaseMixinsContext from "../../contexts/firebase-mixins"
import GlobalContext from "../../contexts/global-context"
import { LOGGED_IN } from "../../constants/login"

function LoginModal(props) {
  let { active_style } = props

  let { combineStyle } = React.useContext(GlobalContext)
  let firebase_mixins_context = React.useContext(FirebaseMixinsContext)

  let ref_login_status = React.useRef()
  let ref_email_password_login_form = React.useRef()

  let [login_modal_classnames, setLoginModalClassnames] = React.useState([
    active_style.modal,
    active_style.isActive,
  ])

  let { user_info, firebaseLogout, firebaseLogin } = firebase_mixins_context

  React.useEffect(() => {
    if (user_info.status == LOGGED_IN) {
      setLoginModalClassnames([active_style.modal])
      console.log("logged in catched")
    } else {
      setLoginModalClassnames([active_style.modal, active_style.isActive])
      console.log("login required")
    }
  }, [user_info])

  return (
    <div className={combineStyle(login_modal_classnames)}>
      <div className={active_style.modalBackground}></div>

      <div className={active_style.modalCard}>
        <section className={active_style.modalCardBody}>
          <div className={active_style.container}>
            <LoginForm active_style={active_style} />
          </div>
        </section>
      </div>
    </div>
  )
}

export default LoginModal
