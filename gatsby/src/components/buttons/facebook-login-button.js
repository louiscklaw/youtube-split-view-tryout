import React from "react"
import FirebaseAuthContext from '../../contexts/firebase-auth-context'

function FacebookLoginButton() {
  let { facebookLogin } = React.useContext(FirebaseAuthContext)

  const handleFacebookLoginOnClick = () => {
    facebookLogin()
  }

  return (
    <>
      <button onClick={handleFacebookLoginOnClick}>facebook login</button>
    </>
  )
}

export default FacebookLoginButton
