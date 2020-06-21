import React from 'react'

import GlobalContext from './global-context'

import FirebaseAuthContext from './firebase-auth-context'
import FirebaseDbContext from './firebase-db-context'
import FirebaseFunctionContext from './firebase-functions-context'


let FirebaseMixinsContext = React.createContext()

function FirebaseMixinsContextProvider(props){
  let FirebaseAuthValues = React.useContext(FirebaseAuthContext)
  let FirebaseDbValues = React.useContext(FirebaseDbContext)
  let FirebaseFunctionValues = React.useContext(FirebaseFunctionContext)


  let {user_settings, setUserSettings} = React.useContext(GlobalContext)
  let {user_info} = FirebaseAuthValues
  let {helloFirebaseDBContext,
    getSettingsFromFirebase,
    saveSettingsToFirebase
  } = FirebaseDbValues

  const firebaseMixinsHelloworld = () => {
    console.log('firebaseMixinsHelloworld')
  }

  const getSettings = () => {
    console.log(user_info.uid)
    return getSettingsFromFirebase(user_info.uid)
      .then( settings => {
        setUserSettings(settings.data())
      })
  }

  const setSettings = (settings) => {
    saveSettingsToFirebase(user_info.uid, settings)
  }



  return(
    <FirebaseMixinsContext.Provider value={{
      ...FirebaseAuthValues,
      ...FirebaseDbValues,
      ...FirebaseFunctionValues,
      firebaseMixinsHelloworld,
      getSettings,
      setSettings
    }}>
      {props.children}
    </FirebaseMixinsContext.Provider>
  )

}

export default FirebaseMixinsContext

export {FirebaseMixinsContextProvider}