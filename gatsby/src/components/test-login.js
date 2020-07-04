import React from 'react'

import ThemeContext from '../contexts/theme-context'
import {FirebaseContext} from '../contexts/firebase-context'

function TestLogin(props){
  // const {githubLogin} = React.useContext(FirebaseContext)
  const {active_style} = React.useContext(ThemeContext)

  const githubLogin = () => {}
  console.log('test-login.js', 'FirebaseContext',FirebaseContext)


  return(
    <>
      <button className={active_style.button} onClick={githubLogin}>open github login</button>
      <button className={active_style.button} onClick={githubLogin}>open google login</button>
      <button className={active_style.button} onClick={githubLogin}>open facebook login</button>
    </>
  )
}

export default TestLogin