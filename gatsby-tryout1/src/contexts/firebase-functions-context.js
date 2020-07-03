import React from "react"
import FirebaseContext from "./firebase-context"

import "firebase/functions"

let init_context = {
  hello: "world",
  firebase_functions: null,
}

let FirebaseFunctionContext = React.createContext(init_context)

function FirebaseFunctionContextProvider(props) {
  let { firebase_app } = React.useContext(FirebaseContext)
  let firebase_functions = firebase_app.functions()

  const testAddAdminRole = email_to_add_admin => {
    // console.log(firebase_functions)
    const addAdminRole = firebase_functions.httpsCallable("addAdminRole")
    addAdminRole({ email: email_to_add_admin }).then(result => {
      console.log(result)
    })
  }

  const firebaseFunctionHelloworld = () => {
    console.log("firebaseFunctionHelloworld")
  }

  return (
    <FirebaseFunctionContext.Provider
      value={{
        firebase_functions,
        testAddAdminRole,
        firebaseFunctionHelloworld,
      }}
    >
      {props.children}
    </FirebaseFunctionContext.Provider>
  )
}

export default FirebaseFunctionContext

export { FirebaseFunctionContextProvider }
