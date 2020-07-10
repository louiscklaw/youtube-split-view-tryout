import React from 'react'
import _ from 'lodash'

import {isDefined, checkIsNotUndefined, getKeys, funcPlaceholder, checkKeyExist, filterOutUndefinedFromJson, copyObj} from '~mixins/general'

import {helloProfileSupport, mergeSeatingPlanByBreakpoint} from '~mixins/profile'


import FirebaseAuthContext from './firebase-auth-context'
import FirebaseDbContext from './firebase-db-context'

import {default_profile} from '~constants/default_profile'

const PROFILE_HEALTHY = 1
const PROFILE_NOT_HEALTHY = 2

let default_context = {
  hello: {}, setHello: funcPlaceholder,
  sayHello: funcPlaceholder,

  current_profile: {},
  resetSettings: funcPlaceholder,
  loadProfile: funcPlaceholder,
  saveProfile: funcPlaceholder,
  saveToFirebase: funcPlaceholder,

  checkProfileIsLoaded: funcPlaceholder,
  saveLayoutToFirebase: funcPlaceholder,
  saveChannelSettingToFirebase: funcPlaceholder,

  clearCurrentProfile: funcPlaceholder
}

let ProfileContext = React.createContext(default_context)

function ProfileContextProvider(props){
  let [hello, setHello] = React.useState({})
  let {user_info} = React.useContext(FirebaseAuthContext)
  let {getDoc} = React.useContext(FirebaseDbContext)

  let [current_profile, setCurrentProfile] = React.useState({})

  let [debug, setDebug] = React.useState({})

  const resetSettings = () =>{
    setCurrentProfile({})
  }

  const saveSettingsToFirebase = (uid, settings_in) => {
    // console.log('profile-context.js','saveSettingsToFirebase', settings_in)
    // console.log('profile-context.js','uid', uid)
    return getDoc("user_settings", uid).set(settings_in)
  }

  const loadProfileFromFirebase = (uid) =>{
    console.log('profile-context.js','loadProfileFromFirebase','uid',uid)
    return getDoc('user_settings', uid).get()
  }

  const loadProfile = (uid) => {
    console.log('profile-context.js','loadProfile','uid',uid)
    return loadProfileFromFirebase(uid)
  }

  const filterOutUndefinedForFirebase = (profile_in) =>{
    // FIXME: this is an lazy method to filter out undefined in complex dict tree
    return filterOutUndefinedFromJson(profile_in)
  }

  const saveProfile = (profile_in) => {
    // console.log('profile-context.js','saveProfile')
    return saveSettingsToFirebase(
      user_info.uid,
      filterOutUndefinedForFirebase(profile_in)
      )
  }

  // update current profile and save
  const updateCurrentProfile = (profile_in) =>{ setCurrentProfile(profile_in) }

  const clearCurrentProfile = () => {
    // for testing
    console.log('profile-context.js', 'clearCurrentProfile')

    setCurrentProfile({})
  }

  const updateLayoutSettings = (layout) => {
    let new_profile = JSON.parse(JSON.stringify(current_profile))

    if (isDefined(new_profile.layouts)){
      let test_breakpoint_name = window.innerWidth > 600 ? 'lg':'xxs'
      new_profile.layouts[test_breakpoint_name] = layout
      console.log('profile-context.js','new_profile', new_profile)
    }
    return new_profile
  }

  const saveLayoutToFirebase = (layout) => {
    console.log('profile-context.js','saveLayoutToFirebase')
    let new_profile = updateLayoutSettings(layout)
    saveProfile(new_profile)
    updateCurrentProfile(new_profile)
  }

  const updateChannelSettings = (channel_setting) =>{
    let new_profile = JSON.parse(JSON.stringify(current_profile))
    if (isDefined(new_profile.channel_setting)){
      new_profile.channel_setting = channel_setting
    }
    return new_profile
  }

  const saveChannelSettingToFirebase = (channel_setting) => {
    console.log('profile-context.js','saveChannelSettingToFirebase')
    let new_profile = updateChannelSettings(channel_setting)
    updateCurrentProfile(new_profile)
    return saveProfile(new_profile)
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

  const sayHello = () => {
    console.log('say Hello')
  }

  const initNewUserProfile= () => {
    updateCurrentProfileAndSaveToFirebase( default_profile )
  }

  const updateCurrentProfileAndSaveToFirebase = (profile_in) =>{
    console.log('profile-context.js','saving profile to firebase', profile_in)

    updateCurrentProfile(profile_in)

    return saveProfile(profile_in)
  }

  const checkProfileHealthy = (p_in) =>{
    // true = healthy, false = not healthy
    let profile_key_check_result = [
      checkKeyExist(p_in, 'breakpoints'),
      checkKeyExist(p_in, 'channel_setting'),
      checkKeyExist(p_in, 'cols'),
      checkKeyExist(p_in, 'layouts')
    ]
    // if (isDefined(p_in)){
    //   if ([ checkKeyExist(p_in, 'channel_setting'), checkKeyExist(p_in, 'layout_settings') ].every( test => test == true )){
    //     return PROFILE_HEALTHY
    //   }
    // }else{
    //   return PROFILE_NOT_HEALTHY
    // }

    let verdict = profile_key_check_result.every( x => x == true) ? PROFILE_HEALTHY: PROFILE_NOT_HEALTHY
    console.log('profile-context.js','checkProfileHealthy','verdict', verdict)

    return verdict

  }

  React.useEffect( () => {
    console.log('profile-context.js','user_info',user_info)
    if ( isDefined( user_info.uid ) ) {
      // assume valid user login = user_info with uid

      loadProfile(user_info.uid)
        .then( ss => {
          let result_from_fb = ss.data()
          console.log('profile-context.js','result_from_fb', result_from_fb)

          if ( checkProfileHealthy( result_from_fb ) == PROFILE_HEALTHY ) {
            console.log('profile-context.js','load profile done')
            setCurrentProfile(result_from_fb)

          } else {
            initNewUserProfile()
          }
        } )
    }
  }, [ user_info ] )

  return(
    <ProfileContext.Provider value={{
      hello, setHello,
      sayHello,

      current_profile,
      checkProfileIsLoaded,
      saveLayoutToFirebase,
      saveChannelSettingToFirebase,
      clearCurrentProfile

    }}>
      {props.children}
    </ProfileContext.Provider>
  )

}


export default ProfileContext
export {ProfileContextProvider}