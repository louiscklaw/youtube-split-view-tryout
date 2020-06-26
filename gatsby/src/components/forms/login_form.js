import React from "react"

import style from "../../scss/style.module.scss"
import ThemeContext from "../../contexts/theme-context"
import { checkIsNotUndefined } from "../../utils/mixins"

import LoginButton from "../buttons/login-button"
import ResetButton from "../buttons/reset-button"

import GoogleLoginButton from "../buttons/google-login-button"
import GithubLoginButton from "../buttons/github-login-button"
import FacebookLoginButton from "../buttons/facebook-login-button"

import firebase_mixins_context from "../../contexts/firebase-mixins"
import { LOGGED_OUT } from "../../constants/login"
import { firebaseLogin, firebaseLogout } from "../../utils/firebase"

function LoginForm(props) {
  let theme_context = React.useContext(ThemeContext)
  let active_style = checkIsNotUndefined(theme_context)
    ? theme_context.active_style
    : style

  let { user_info } = { user_info: { status: LOGGED_OUT } }

  let ref_login_status = React.useRef(null)

  let [login_info, setLoginInfo] = React.useState()

  const handleLogoutClick = () => {
    firebaseLogout()
  }

  const handleLoginFormSubmit = e => {
    e.preventDefault()
    let email = e.target.email.value
    let password = e.target.password.value
    firebaseLogin(email, password)
  }

  return (
    <>
      <h3>successful login test</h3>
      <form
        className={active_style.emailPasswordLogin}
        onSubmit={handleLoginFormSubmit}
      >
        <input
          type="email"
          placeholder="admin@example.com"
          defaultValue="admin@example.com"
          name="email"
        />

        <input
          type="password"
          placeholder="123456"
          defaultValue="123456"
          name="password"
        />

        <LoginButton />
        <ResetButton />
      </form>

      <form
        className={active_style.emailPasswordLogin}
        onSubmit={handleLoginFormSubmit}
      >
        <input
          type="email"
          placeholder="user@example.com"
          defaultValue="user@example.com"
          name="email"
        />

        <input
          type="password"
          placeholder="123456"
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
        <button onClick={handleLogoutClick}>logout</button>
      </div>

      <div className={active_style.divider} data-content="OR"></div>

      <div ref={ref_login_status} className={active_style.loginStatus}>
        {user_info.status}
      </div>
    </>
  )
}

export default LoginForm
