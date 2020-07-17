import React from 'react'

import GlobalContext from '../contexts/global-context'
import ThemeContext from '../contexts/theme-context'

import LoginForm from './forms/login-form'
import TestLogin from './test-login'
import DesktopLogin from './desktop-login'
import NarrowWindowLogin from './narrow-window-login'


function LoginPage(props){
  let {narrow_window} = React.useContext(ThemeContext)
  return(
    <>
      {narrow_window ? <NarrowWindowLogin /> : <DesktopLogin />}
    </>
  )
}

export default LoginPage