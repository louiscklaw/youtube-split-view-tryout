import React from 'react'
import LoginForm from './forms/login-form'

import ThemeContext from '../contexts/theme-context'

import {combineStyle} from '../utils/common'

function DesktopLogin(props){
  let {active_style} = React.useContext(ThemeContext)

  return(
    <>
      <div className={active_style.loginContainer}>
        <div className={active_style.loginWrapper}>
          <div className={active_style.loginGreetings}>
            <div>
              Youtube split viewer
            </div>

            <div>
              Login
            </div>
          </div>

          <div className={active_style.loginPanel}>
            <div className={active_style.socialLoginWrapper}>
              <div className={combineStyle([active_style.button, active_style.socialLoginButton, active_style.loginButtonFacebook])}>
                <i className={combineStyle([active_style.fab, active_style.faFacebookF])}></i>
                <span className={active_style.socialLoginButtonText}>facebook login</span>
              </div>

              <div className={combineStyle([active_style.button, active_style.socialLoginButton, active_style.loginButtonGoogle])}>
                <i className={combineStyle([active_style.fab, active_style.faGoogle])}></i>
                <span className={active_style.socialLoginButtonText}>google login</span>
              </div>

              <div className={combineStyle([active_style.button, active_style.socialLoginButton, active_style.loginButtonGithub])}>
                <i className={combineStyle([active_style.fab, active_style.faGithubAlt])}></i>
                <span className={active_style.socialLoginButtonText}>github login</span>
              </div>
            </div>


            <div className={active_style.emailLoginWrapper}>
              <div className={active_style.field}>
                <label class={active_style.label}>Email</label>
                <div className={active_style.control}>
                  <input className={active_style.input} type="text" placeholder="e.g 123@123.com" />
                </div>
              </div>

              <div className={active_style.field}>
                <label className={active_style.label}>Password</label>
                <div className={active_style.control}>
                  <input className={active_style.input} type="password" />
                </div>
              </div>

              <div className={active_style.emailLoginBottom}>
                <div className={active_style.control}>
                  <a className={combineStyle([active_style.button, active_style.isPrimary])} href="main.html">Login</a>
                </div>


                <div className={active_style.control}>
                  <a className={active_style.isPrimary} href="forget_password.html">Forget Password ?</a>
                </div>

              </div>

            </div>


          </div>

        </div>
      </div>

      <span className={active_style.credit_unsplash}>
        Photo by <a href="https://unsplash.com/@konkarampelas?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Kon Karampelas</a> on <a href="https://unsplash.com/s/photos/youtube?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a>
      </span>

    </>
  )
}

export default DesktopLogin
