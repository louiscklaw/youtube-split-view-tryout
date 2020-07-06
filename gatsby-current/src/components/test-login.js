import React from 'react'

import ThemeContext from '../contexts/theme-context'
import FirebaseAuthContext from '../contexts/firebase-auth-context'

function TestLogin(props){
  const {active_style} = React.useContext(ThemeContext)
  const {githubLogin, facebookLogin, googleLogin, firebaseLogout} = React.useContext(FirebaseAuthContext)


  console.log('test-login.js', 'FirebaseAuthContext',FirebaseAuthContext)


  return(
    <>
    <ul>
      <li>
        <button className={active_style.button} onClick={githubLogin}>open github login</button>
      </li>
      <li>
        <button className={active_style.button} onClick={googleLogin}>open google login</button>
      </li>
      <li>
        <button className={active_style.button} onClick={facebookLogin}>open facebook login</button>
      </li>
      <li>
        <button className={active_style.button} onClick={firebaseLogout}>logout</button>
      </li>
    </ul>
    </>
  )
}

export default TestLogin