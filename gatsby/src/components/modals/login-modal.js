import React from 'react'
import _ from 'lodash'

import ModalCloseButton from '../buttons/modal-close-button'

import InputEmail from '../input/email'
import InputPassword from '../input/password'
import LoginButton from '../buttons/login-button'
import ResetButton from '../buttons/reset-button'
import GoogleLoginButton from '../buttons/google-login-button'
import GithubLoginButton from '../buttons/github-login-button'
import FacebookLoginButton from '../buttons/facebook-login-button'

import FirebaseMixinsContext from '../../contexts/firebase-mixins'
import GlobalContext from '../../contexts/global-context'

function LoginModal(props){
  let ref_login_status = React.useRef()
  let ref_email_password_login_form = React.useRef()
  let {combineStyle} = React.useContext(GlobalContext)
  let {active_style} = props

  let firebase_mixins_context = React.useContext(FirebaseMixinsContext)
  let {user_info, firebaseLogout} = firebase_mixins_context

  React.useEffect(()=>{
    console.log(ref_email_password_login_form.current)
      // .addEventListener('submit',(e)=>{
      //   e.preventDefault()





      // })
  })

  return(
    <div className={combineStyle([active_style.modal, active_style.isActive])}>
      <div className={active_style.modalBackground}></div>

      <div className={active_style.modalCard}>
        <section className={active_style.modalCardBody}>

            <div className={active_style.container}>
              <div className={active_style.loginChooser}>
                <form className={active_style.emailPasswordLogin} ref={ref_email_password_login_form}>
                  <div>
                    <InputEmail />
                  </div>

                  <div>
                    <InputPassword />
                  </div>
                  <LoginButton />
                  <ResetButton />
                </form>

                <div className={active_style.divider} data-content="OR"></div>

                <div className={active_style.socialLogin}>
                  <GoogleLoginButton />
                  <GithubLoginButton />
                  <FacebookLoginButton />
                </div>

                <div className={active_style.divider} data-content="OR"></div>

                <div className={active_style.logout}>
                  <button onClick={firebaseLogout}>logout</button>
                </div>


                <div className={active_style.divider} data-content="OR"></div>
                <div ref={ref_login_status} className={active_style.loginStatus}>
                  {user_info.status}
                </div>

              </div>
            </div>

        </section>
      </div>
    </div>
  )
}

export default LoginModal