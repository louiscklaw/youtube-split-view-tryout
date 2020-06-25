import React from "react"

import FirebaseMixinsContext from './firebase-mixins'
import {isDefined} from '../utils/mixins'
import {saveSettingsToFirebase, loadProfileFromFirebase} from '../utils/firebase'

import {LOGGED_IN, LOGGED_OUT} from '../constants/login'

let ProfileContext = React.createContext()

function ProfileContextProvider(props) {
  let firebase_mixins_context = React.useContext(FirebaseMixinsContext)
  let { user_info } = isDefined(firebase_mixins_context)
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
    return loadProfileFromFirebase(user_info.uid)
  }

  const saveProfile = (profile_in) => {
    console.log('profile-context.js', 'profile_in', profile_in)
    return saveSettingsToFirebase(user_info.uid, profile_in)
  }

  const updateCurrentProfile = (profile_in) =>{
    // update current profile and save
    setCurrentProfile(profile_in)
  }

  const updateCurrentProfileAndSaveToFirebase = (profile_in) =>{
    console.log('profile-context.js','updateCurrentProfileAndSaveToFirebase')
    console.log('profile-context.js','profile_in',profile_in)

    updateCurrentProfile(profile_in)
    return saveProfile(profile_in)
  }

  const clearCurrentProfile = () => {
    // for testing
    console.log('profile-context.js', 'clearCurrentProfile')
    setCurrentProfile({})
  }

  let [current_profile, setCurrentProfile] = React.useState({})
  React.useEffect(()=>{
    if (isDefined(user_info.uid)){
      loadProfile()
        .then(ss => {
          updateCurrentProfile(ss.data())
          console.log('profile_context','profile loading done')
          console.log('profile_context', ss.data())
        })
    }else{
      console.log('profile_context','skipping loading profile')
      console.log('profile_context', user_info.uid)
    }
  },[user_info])

  const packProfile = (profile_in, key, value) => {
    console.log('profile-context.js','profile_in', profile_in)
    return {...profile_in, [key]: JSON.stringify(value)}
  }

  const unpackProfile = (profile_in, key_wanted) => {
    return JSON.parse(profile_in[key_wanted])
  }

  return (
    <ProfileContext.Provider
      value={{
        profileHelloworld,
        current_profile,
        updateCurrentProfile,
        loadProfile,
        saveProfile,
        clearCurrentProfile,
        updateCurrentProfileAndSaveToFirebase,
        packProfile, unpackProfile
      }}
    >
      {props.children}
    </ProfileContext.Provider>
  )
}

export default ProfileContext
export { ProfileContextProvider }
