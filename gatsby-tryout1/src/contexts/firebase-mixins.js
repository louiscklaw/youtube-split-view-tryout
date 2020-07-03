import React from "react"

import FirebaseAuthContext from "./firebase-auth-context"
import FirebaseDbContext from "./firebase-db-context"
import FirebaseFunctionContext from "./firebase-functions-context"

let FirebaseMixinsContext = React.createContext()

function FirebaseMixinsContextProvider(props) {
  let FirebaseAuthValues = React.useContext(FirebaseAuthContext)
  let FirebaseDbValues = React.useContext(FirebaseDbContext)
  let FirebaseFunctionValues = React.useContext(FirebaseFunctionContext)

  const firebaseMixinsHelloworld = () => {
    console.log("firebaseMixinsHelloworld")
  }

  return (
    <FirebaseMixinsContext.Provider
      value={{
        ...FirebaseAuthValues,
        ...FirebaseDbValues,
        ...FirebaseFunctionValues,
        firebaseMixinsHelloworld
      }}
    >
      {props.children}
    </FirebaseMixinsContext.Provider>
  )
}

export default FirebaseMixinsContext

export { FirebaseMixinsContextProvider }
