import React from 'react'
import _ from 'lodash'
import {isDefined, checkIsNotUndefined, getKeys, funcPlaceholder, checkKeyExist, filterOutUndefinedFromJson} from '~utils/mixins'

import FirebaseAuthContext from './firebase-auth-context'
import FirebaseDbContext from './firebase-db-context'

const PROFILE_HEALTHY = 1
const PROFILE_NOT_HEALTHY = 2

let default_context = {
  hello: {}, setHello: funcPlaceholder,

  current_profile: {},
  resetSettings: funcPlaceholder,
  loadProfile: funcPlaceholder,
  saveProfile: funcPlaceholder,
  saveToFirebase: funcPlaceholder,

  checkProfileIsLoaded: funcPlaceholder
}

let ProfileContext = React.createContext(default_context)

function ProfileContextProvider(props){
  let [hello, setHello] = React.useState({})
  let {user_info} = React.useContext(FirebaseAuthContext)
  let {getDoc} = React.useContext(FirebaseDbContext)

  let [current_profile, setCurrentProfile] = React.useState({})

  const resetSettings = () =>{
    setCurrentProfile({})
  }

  const saveSettingsToFirebase = (uid, settings_in) => {
    console.log('firebase.js','saveSettingsToFirebase', settings_in)
    console.log('firebase.js','uid', uid)
    return getDoc("user_settings", uid).set(settings_in)
  }

  const loadProfileFromFirebase = (uid) =>{
    return getDoc('user_settings', uid).get()
  }

  const filterOutUndefinedForFirebase = (profile_in) =>{
    // FIXME: this is an lazy method to filter out undefined in complex dict tree
    return filterOutUndefinedFromJson(profile_in)
  }

  const checkProfileHealthy = (p_in) =>{
    // true healthy, false not healthy
    console.log('profile-context.js','checkProfileHealthy',p_in)

    if (isDefined(p_in)){
      if ([ checkKeyExist(p_in, 'channel_setting'), checkKeyExist(p_in, 'layout_settings') ].every( test => test == true )){
        return PROFILE_HEALTHY
      }
    }else{
      return PROFILE_NOT_HEALTHY
    }

  }

  const loadProfile = () => {
    return loadProfileFromFirebase(user_info.uid)
  }

  const saveProfile = (profile_in) => {
    console.log('profile-context.js', 'saveProfile', profile_in)

    return saveSettingsToFirebase(
      user_info.uid,
      filterOutUndefinedForFirebase(profile_in)
      )
  }

  const updateCurrentProfile = (profile_in) =>{
    // update current profile and save
    setCurrentProfile(profile_in)
  }

  const saveToFirebase = (profile_in) => {
    return saveProfile(profile_in)
  }

  const updateCurrentProfileAndSaveToFirebase = (profile_in) =>{
    console.log('profile-context.js','saving profile to firebase', profile_in)

    updateCurrentProfile(profile_in)

    return saveToFirebase(profile_in)
  }

  const clearCurrentProfile = () => {
    // for testing
    console.log('profile-context.js', 'clearCurrentProfile')
    setCurrentProfile({})
  }


  React.useEffect(()=>{
    // load user profile , layout and vid

    if (isDefined(user_info.uid)){
      loadProfile()
        .then(ss => {
          let result_from_fb = ss.data()
          if (checkProfileHealthy(result_from_fb) == PROFILE_HEALTHY){
            // load user profile found healthy
            let unpacked_profile = unpackProfile(result_from_fb)
            updateCurrentProfile(unpacked_profile)
            console.log('profile-context.js','load profile done')
          }else{
            // data is missing key, reset user profile
            updateCurrentProfile(default_profile)
            console.log('profile-context.js','data is missing required key')
          }
        })

    }else{
      console.log('profile-context.js','skipping loading profile')
      console.log('profile-context.js', user_info.uid)
    }
  },[user_info])

  const packProfile = (profile_in, key, value) => {
    console.log('profile-context.js','profile_in', profile_in)
    return {...profile_in, [key]: value}
  }

  const packLayoutToProfile = (profile_in, layout_name, value) =>{

    let result_profile = {
      ...profile_in,
      layout_settings: {
        ...profile_in.layout_settings,
        [layout_name]: { seating_plan: value}
      }
    }

    return result_profile
  }

  const unpackProfile = (profile_in) =>{
    return profile_in
  }

  const unpackProfileByKey = (profile_in, key_wanted) => {
    return profile_in[key_wanted]
  }

  // FIXME: for POC only
  const checkProfileIsLoaded = () => {
    if (checkIsNotUndefined(current_profile)){
      if (getKeys(current_profile).length > 0){
        return true
      }else{
        return false
      }
    }else{
      return false
    }
  }

  return(
    <ProfileContext.Provider value={{
      hello, setHello,

      current_profile,

      resetSettings,
      loadProfile,
      saveProfile,

      saveToFirebase,

      checkProfileIsLoaded
    }}>
      {props.children}
    </ProfileContext.Provider>
  )
}


export default ProfileContext
export {ProfileContextProvider}