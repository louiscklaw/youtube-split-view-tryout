import React from "react"
import _ from 'lodash'

import FirebaseAuthContext from "./firebase-auth-context"

import FirebaseMixinsContext from './firebase-mixins'
import {isDefined} from '../utils/mixins'
import {saveSettingsToFirebase, loadProfileFromFirebase} from '../utils/firebase'

import {LOGGED_IN, LOGGED_OUT} from '../constants/login'
import {default_profile} from '../constants/default_profile'

let ProfileContext = React.createContext()

// let default_profile = {
//   channel_setting: [{
//     channel_vid:'aaaaa',
//     channel_title: 'ttttt',
//     channel_type:"youtube"
//   }],
//   layout: [{
//     a:1,
//     b:2
//   }]
// }

console.log('profile-contextType.js','default_profile', default_profile)

const PROFILE_HEALTHY = 1
const PROFILE_NOT_HEALTHY = 2

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
      console.log('profile-context.js','user logged in, load profile')
      // getSettings()
    }else{
      console.log('profile-context.js','user not logged in, skipping')
      resetSettings()
    }

    console.log('profile-context.js','profile',user_info.status)

  },[firebase_mixins_context])

  // const getSettings = () => {
  //   loadProfile()
  //     .then(ss => {
  //       let result_from_fb = ss.data()
  //       console.log()
  //       if (checkProfileHealthy(result_from_fb) == PROFILE_HEALTHY){
  //         let result_from_fb = ss.data()
  //         let unpacked_profile = unpackProfile(result_from_fb)
  //         console.log('profile-context.js','unpacked_profile', unpacked_profile)
  //         updateCurrentProfile(unpacked_profile)
  //       }else{
  //         updateCurrentProfile(default_profile)
  //         console.log('profile-context.js','data is missing required key, loading default profile')

  //       }

  //     })
  // }
  const resetSettings = () =>{
    setCurrentProfile({})
  }

  const checkKeyExist = (o,k) =>{
    return Object.keys(o).indexOf(k) > -1
  }

  const checkProfileHealthy = (p_in) =>{
    // true healthy, false not healthy
    console.log('profile-context.js','checkProfileHealthy',p_in)

    if (isDefined(p_in)){
      if ([ checkKeyExist(p_in, 'channel_setting'), checkKeyExist(p_in, 'layout') ].every( test => test == true )){
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

    return saveSettingsToFirebase(user_info.uid, {
      channel_setting: JSON.stringify(profile_in.channel_setting),
      layout: JSON.stringify(profile_in.layout)
    })
  }

  const updateCurrentProfile = (profile_in) =>{
    // update current profile and save
    setCurrentProfile(profile_in)
  }

  const updateCurrentProfileAndSaveToFirebase = (profile_in) =>{
    console.log('profile-context.js','saving profile to firebase')

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
    // load user profile , layout and vid
    console.log('profile-context.js','loading profile')
    if (isDefined(user_info.uid)){
      loadProfile()
        .then(ss => {
          let result_from_fb = ss.data()
          if (checkProfileHealthy(result_from_fb) == PROFILE_HEALTHY){
            // load user profile found healthy
            let unpacked_profile = unpackProfile(result_from_fb)
            updateCurrentProfile(unpacked_profile)

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
    console.log('profile-context.js',
    'layout_name',layout_name)
    let result_layout = {...profile_in.layout, [layout_name]:value}
    let result_profile = {
      ...profile_in,
      layout: result_layout
    }
    console.log('profile-context.js', 'result_profile',result_profile)
    console.log('profile-context.js', 'result_layout',result_layout)
    return result_profile
  }

  const unpackProfile = (profile_in) =>{
    return {
      channel_setting: JSON.parse(profile_in.channel_setting),
      layout: JSON.parse(profile_in.layout)
    }
  }



  const unpackProfileByKey = (profile_in, key_wanted) => {
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
        packProfile, unpackProfileByKey, unpackProfile,
        packLayoutToProfile,
        checkProfileHealthy
      }}
    >
      {props.children}
    </ProfileContext.Provider>
  )
}

export default ProfileContext
export { ProfileContextProvider }
