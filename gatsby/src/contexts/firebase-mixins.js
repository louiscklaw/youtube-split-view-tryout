import React from 'react'
import FirebaseAuthContext from './firebase-auth-context'

let default_value = {}

let FirebaseMixinsContext = React.createContext(default_value)

function FirebaseMixinsContextProvider(props){

  const helloFirebaseMixins = () => {
    console.log('helloFirebaseMixins')
  }

  let FirebaseAuthValues = React.useContext(FirebaseAuthContext)

  return(
    <FirebaseMixinsContext.Provider value={{
      helloFirebaseMixins,
      ...FirebaseAuthValues,
      // ...FirebaseDbValues,
      // ...FirebaseFunctionValues
    }}>

      {props.children}

    </FirebaseMixinsContext.Provider>
  )
}

export default FirebaseMixinsContext

export {FirebaseMixinsContextProvider}