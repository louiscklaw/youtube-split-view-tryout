import React from 'react'
import firebase from 'firebase/app'
import firebaseConfig from '../firebase-config'

import { FirebaseAuthContextProvider } from './firebase-auth-context'

import { FirebaseMixinsContextProvider } from './firebase-mixins'

let init_context = {
  hello: 'world',
  firebase_app: null
}

let FirebaseContext = React.createContext(init_context)

function FirebaseContextProvider(props){
  let firebase_app = firebase.initializeApp(firebaseConfig)

  return(
    <FirebaseContext.Provider value={{ firebase_app }}>
      <FirebaseAuthContextProvider>
        <FirebaseMixinsContextProvider>

          {props.children}

        </FirebaseMixinsContextProvider>
      </FirebaseAuthContextProvider>
    </FirebaseContext.Provider>
  )

}

export default FirebaseContext

export {FirebaseContextProvider}