import React from "react"

import LoginButton from "../buttons/login-button"
import ResetButton from "../buttons/reset-button"

import GoogleLoginButton from "../buttons/google-login-button"
import GithubLoginButton from "../buttons/github-login-button"
import FacebookLoginButton from "../buttons/facebook-login-button"

import firebase_mixins_context from "../../contexts/firebase-mixins"

function LoginForm(props) {
  let { active_style } = props

  // let ref_email_password_login_form = React.useRef(null)
  let ref_login_status = React.useRef(null)

  let { firebaseLogin, firebaseLogout, user_info } = React.useContext(
    firebase_mixins_context
  )

  let [login_status, setLoginStatus] = React.useState()

  React.useEffect(() => {
    let form_email_password = document.querySelector(
      "#email_password_login_form"
    )
    let ele_login_status = ref_login_status.current

    form_email_password.addEventListener("submit", e => {
      e.preventDefault()

      firebaseLogin(
        form_email_password.email.value,
        form_email_password.password.value
      )
        .then(cred => {
          setLoginStatus(JSON.stringify(cred))
        })
        .catch(err => {
          setLoginStatus(err.message)
        })
    })
  }, [])

  return (
    <>
      <h3>successful login test</h3>
      <form
        className={active_style.emailPasswordLogin}
        id="email_password_login_form"
      >
        <input
          type="email"
          placeHolder="admin@example.com"
          defaultValue="admin@example.com"
          name="email"
        />

        <input
          type="password"
          placeHolder="123456"
          defaultValue="123456"
          name="password"
        />

        <LoginButton />
        <ResetButton />
      </form>

      <div className={active_style.divider} data-content="OR"></div>

      <div className={active_style.socialLogin}>
        <GoogleLoginButton />
        <GithubLoginButton />
        <FacebookLoginButton />
      </div>

      <div className={active_style.logout}>
        <button onClick={firebaseLogout}>logout</button>
      </div>

      <div className={active_style.divider} data-content="OR"></div>

      <div ref={ref_login_status} className={active_style.loginStatus}>
        {user_info.status}
      </div>
    </>
  )
}

export default LoginForm
