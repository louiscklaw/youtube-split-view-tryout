import React from 'react'
import FirebaseMixinsContext from '../../contexts/firebase-mixins'

function FacebookLoginButton(){
  let firebase_mixins_context = React.useContext(FirebaseMixinsContext)

  let {facebookLogin} = firebase_mixins_context

  const handleFacebookLoginOnClick = () => {
    console.log('github login onClick')
    facebookLogin()
  }

  return(
    <>
      <button onClick={handleFacebookLoginOnClick}>facebook login</button>
    </>
  )
}


export default FacebookLoginButton