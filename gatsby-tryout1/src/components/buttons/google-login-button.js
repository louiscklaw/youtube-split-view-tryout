import React from "react"

import { googleLogin } from "../../utils/firebase"

function GoogleLoginButton() {
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
