import React from 'react'

import { LOGGED_IN, LOGGED_OUT } from "../constants/login"

import firebase from "firebase/app"
import "firebase/auth"

import FirebaseContext from "./firebase-context"


let init_user_info = {
  email: "",
  is_admin: false,
  status: LOGGED_OUT,
}

let default_context = {
  hello: 'world', setHello: () => {},

  firebaseLogin: () => {},
  firebaseLogout: () => {},
  user_info: '', setUserInfo: () => {},

  githubLogin: () => {},

}

let FirebaseAuthContext = React.createContext(default_context)

function FirebaseAuthContextProvider(props){
  let { firebase_app } = React.useContext(FirebaseContext)
  let firebase_auth = firebase_app.auth()
  let [user_info, setUserInfo] = React.useState(init_user_info)

  const firebaseAuthChanged = () => {
    firebase_auth.onAuthStateChanged(user => {
      if (user) {
        user.getIdTokenResult().then(idTokenResult => {
          setUserInfo({
            email: user.email,
            is_admin: idTokenResult.claims.admin,
            status: LOGGED_IN,
            raw_user: user,
            uid: user.uid,
          })
        })
      } else {
        // user logged out
        setUserInfo(init_user_info)
      }
    })
  }

  const firebaseLogin = (email, password) => {
    return firebase_auth.signInWithEmailAndPassword(email, password)
  }

  const firebaseLogout = () => {
    // alert('calling firebase auth context logout')
    console.log("calling firebaseLogout")
    firebase_auth.signOut()
  }

  const githubLogin = () => {
    var provider = new firebase.auth.GithubAuthProvider()

    provider.setCustomParameters({
      login_hint: "user@example.com",
    })

    firebase_auth
      .signInWithPopup(provider)
      .then(userdata => {
        console.log("github login ok")
      })
      .catch(err => {
        console.log("github login fail,", err.message)
      })
  }

  React.useEffect(() => {
    firebaseAuthChanged()

    return function cleanup() {
      firebaseLogout()
      setUserInfo(init_user_info)
    }
  },[])

  return(
    <FirebaseAuthContext.Provider value={{
      firebaseLogin, firebaseLogout,
      user_info, setUserInfo,
      githubLogin
    }}>
      {props.children}
    </FirebaseAuthContext.Provider>
  )
}

export default FirebaseAuthContext
export { FirebaseAuthContextProvider }