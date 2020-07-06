import React from "react"
import FirebaseAuthContext from '../../contexts/firebase-auth-context'

function GoogleLoginButton() {
  let { googleLogin } = React.useContext(FirebaseAuthContext)

  const handleGoogleLoginOnClick = () => {
    googleLogin()
  }

  return (
    <>
      <button onClick={handleGoogleLoginOnClick}>google login</button>
    </>
  )
}

export default GoogleLoginButton
