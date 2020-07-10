import React from 'react'
import {Link, navigate} from 'gatsby'

import ProfileContext from '~contexts/profile-context'
import FirebaseAuthContext from '~contexts/firebase-auth-context'

function LogoutPage(props){
  let {clearCurrentProfile} = React.useContext(ProfileContext)
  const {user_info, firebaseLogout} = React.useContext(FirebaseAuthContext)

  React.useEffect(()=>{
    clearCurrentProfile()
    firebaseLogout()
      .then(() => {
        navigate('/')
      })
  },[])

  return(
    <>
      <div>
        this is logout page
      </div>

      <div>
        <Link to="/">Back to main</Link>
      </div>
    </>
  )
}

export default LogoutPage