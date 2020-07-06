import React from "react"

import ThemeContext from "../../contexts/theme-context"

import LoginButton from "../buttons/login-button"
import ResetButton from "../buttons/reset-button"

import GoogleLoginButton from "../buttons/google-login-button"
import GithubLoginButton from "../buttons/github-login-button"
import FacebookLoginButton from "../buttons/facebook-login-button"

import { LOGGED_OUT } from "../../constants/login"
import FirebaseAuthContext from '../../contexts/firebase-auth-context'


function LoginForm(props) {
  let {active_style} = React.useContext(ThemeContext)
  let {firebaseLogin, firebaseLogout} = React.useContext(FirebaseAuthContext)

  let { user_info } = { user_info: { status: LOGGED_OUT } }
  let ref_login_status = React.useRef(null)
  let [login_info, setLoginInfo] = React.useState()
  let [login_error_message, setLoginErrorMessage] = React.useState('')


  const handleLoginFormSubmit = e => {
    e.preventDefault()
    let email = e.target.email.value
    let password = e.target.password.value
    console.log('login-form.js','findme')
    console.log('login-form.js','email',email)

    firebaseLogin(email, password)
      .catch(err => {
        console.log('login-form.js','firebaseLoginError',err.message)
        setLoginErrorMessage(err.message)
      })
  }

  const handleLogoutClick = () => {
    firebaseLogout()
  }

  return(
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
      { login_error_message }

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
