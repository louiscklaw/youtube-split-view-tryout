import React from "react"

import FirebaseMixinsContext from './firebase-mixins'
import {checkIsNotUndefined} from '../utils/mixins'
import {saveSettingsToFirebase, loadProfileFromFirebase} from '../utils/firebase'

import {LOGGED_IN, LOGGED_OUT} from '../constants/login'

let ProfileContext = React.createContext()

function ProfileContextProvider(props) {
  let [current_profile, setCurrentProfile] = React.useState()

  let firebase_mixins_context = React.useContext(FirebaseMixinsContext)
  let { user_info } = checkIsNotUndefined(firebase_mixins_context)
  ? firebase_mixins_context
  : { status: LOGGED_OUT }

  const profileHelloworld = () => {
    console.log("profile helloworld")
  }

  React.useEffect(()=>{
    // user_logged_in
    if (user_info.status == LOGGED_IN){
      console.log('findme','user logged in, load profile')
    }else{
      console.log('findme','user not logged in, skipping')
    }

    console.log('findme','profile',user_info.status)

  },[firebase_mixins_context])

  const loadProfile = () => {
    if (checkIsNotUndefined(user_info)){
      return {}
    }else{

      return loadProfileFromFirebase(user_info.uid)
    }
  }

  const saveProfile = (profile_in) => {
    console.log('findme', user_info)
    console.log('findme', 'saveProfile called')
    saveSettingsToFirebase(user_info.uid, profile_in)
  }

  return (
    <ProfileContext.Provider
      value={{
        profileHelloworld,
        current_profile,
        loadProfile,
        saveProfile,
      }}
    >
      {props.children}
    </ProfileContext.Provider>
  )
}

export default ProfileContext
export { ProfileContextProvider }
