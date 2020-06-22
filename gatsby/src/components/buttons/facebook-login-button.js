import React from "react"
import { facebookLogin } from "../../utils/mixins"

function FacebookLoginButton() {
  const handleFacebookLoginOnClick = () => {
    console.log("github login onClick")
    facebookLogin()
  }

  return (
    <>
      <button onClick={handleFacebookLoginOnClick}>facebook login</button>
    </>
  )
}

export default FacebookLoginButton
