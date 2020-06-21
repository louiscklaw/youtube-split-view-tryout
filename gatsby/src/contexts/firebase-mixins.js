import React from "react"

import { LOGGED_IN } from "../constants/login"

import GlobalContext from "./global-context"

import FirebaseAuthContext from "./firebase-auth-context"
import FirebaseDbContext from "./firebase-db-context"
import FirebaseFunctionContext from "./firebase-functions-context"

let FirebaseMixinsContext = React.createContext()

function FirebaseMixinsContextProvider(props) {
  let FirebaseAuthValues = React.useContext(FirebaseAuthContext)
  let FirebaseDbValues = React.useContext(FirebaseDbContext)
  let FirebaseFunctionValues = React.useContext(FirebaseFunctionContext)

  let { user_settings, setUserSettings } = React.useContext(GlobalContext)
  let { user_info } = FirebaseAuthValues
  let {
    helloFirebaseDBContext,
    getSettingsFromFirebase,
    saveSettingsToFirebase,
  } = FirebaseDbValues

  React.useEffect(() => {
    if (user_info.status === LOGGED_IN) {
      getSettings()
    } else {
      resetSettings()
    }
  }, [user_info])

  const firebaseMixinsHelloworld = () => {
    console.log("firebaseMixinsHelloworld")
  }

  const getSettings = () => {
    return getSettingsFromFirebase(user_info.uid).then(settings => {
      setUserSettings(settings.data())
    })
  }

  const resetSettings = () => {
    setUserSettings({})
  }

  const setSettings = settings => {
    return saveSettingsToFirebase(user_info.uid, settings)
  }

  return (
    <FirebaseMixinsContext.Provider
      value={{
        ...FirebaseAuthValues,
        ...FirebaseDbValues,
        ...FirebaseFunctionValues,
        firebaseMixinsHelloworld,
        getSettings,
        setSettings,
      }}
    >
      {props.children}
    </FirebaseMixinsContext.Provider>
  )
}

export default FirebaseMixinsContext

export { FirebaseMixinsContextProvider }
