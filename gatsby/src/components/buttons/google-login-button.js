import React from 'react'

import FirebaseMixinsContext from '../../contexts/firebase-mixins'

function GoogleLoginButton(){
  let firebase_mixins_context = React.useContext(FirebaseMixinsContext)

  let {googleLogin} = firebase_mixins_context

  const handleGoogleLoginOnClick = () => {
    console.log('handlegoogle login onClick')
    googleLogin()
  }

  return(
    <>
      <button onClick={handleGoogleLoginOnClick}>google login</button>
    </>
  )
}

export default GoogleLoginButton
