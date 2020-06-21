import React from 'react'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

import firebaseConfig from '../firebase-config'

import { FirebaseAuthContextProvider } from './firebase-auth-context'
import { FirebaseDbContextProvider } from './firebase-db-context'
import { FirebaseFunctionContextProvider } from './firebase-functions-context'
import { FirebaseMixinsContextProvider } from './firebase-mixins'

let init_context = {
  hello: 'world',
  firebase_app: null
}

let FirebaseContext = React.createContext(init_context)

function FirebaseContextProvider(props){
  let firebase_app = firebase.initializeApp(firebaseConfig)
  let firebase_db = firebase_app.firestore()

  return(
    <FirebaseContext.Provider value={{
      firebase_app,
      firebase_db
      }}>
      <FirebaseAuthContextProvider>
        <FirebaseDbContextProvider>
          <FirebaseFunctionContextProvider>
            <FirebaseMixinsContextProvider>
              {props.children}
            </FirebaseMixinsContextProvider>
          </FirebaseFunctionContextProvider>
        </FirebaseDbContextProvider>
      </FirebaseAuthContextProvider>
    </FirebaseContext.Provider>
  )

}

export default FirebaseContext

export {FirebaseContextProvider}