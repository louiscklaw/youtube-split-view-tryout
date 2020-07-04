import React from 'react'
import "firebase/functions"

import FirebaseContext from "./firebase-context"

let default_context = {
  helloFirebaseFunctionsContext: () => {},
  testAddAdminRole: () => {},
}

let FirebaseFunctionContext = React.createContext(default_context)

function FirebaseFunctionContextProvider(props) {
  let { firebase_app } = React.useContext(FirebaseContext)
  let firebase_functions = firebase_app.functions()

  const helloFirebaseFunctionsContext = () =>{
    console.log('firebase-functions-context.js', 'hello')
  }

  const testAddAdminRole = email_to_add_admin => {
    // console.log(firebase_functions)
    const addAdminRole = firebase_functions.httpsCallable("addAdminRole")
    addAdminRole({ email: email_to_add_admin }).then(result => {
      console.log(result)
    })
  }

  return(
    <FirebaseFunctionContext.Provider
      value={{
        helloFirebaseFunctionsContext,
        testAddAdminRole
      }}
    >
      {props.children}
    </FirebaseFunctionContext.Provider>
  )
}


export default FirebaseFunctionContext

export { FirebaseFunctionContextProvider }
