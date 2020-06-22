import React from "react"

import firebase from "firebase/app"
import "firebase/auth"

import { LOGGED_IN, LOGGED_OUT } from "../constants/login"
import FirebaseContext from "./firebase-context"

let FirebaseAuthContext = React.createContext()

let init_user_info = {
  email: "",
  is_admin: false,
  status: LOGGED_OUT,
}

function FirebaseAuthContextProvider(props) {
  let { firebase_app } = React.useContext(FirebaseContext)
  let firebase_auth = firebase_app.auth()
  let [user_info, setUserInfo] = React.useState(init_user_info)

  React.useEffect(() => {
    // add listener for auth changed
    firebaseAuthChanged()

    return function cleanup() {
      firebaseLogout()
      setUserInfo(init_user_info)
    }
  }, [])

  const firebaseAuthHelloworld = () => {
    alert("firebaseAuthHelloworld")
  }

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

  const firebaseLogout = () => {
    // alert('calling firebase auth context logout')
    console.log("calling firebaseLogout")
    firebase_auth.signOut()
  }

  const firebaseLogin = (email, password) => {
    return firebase_auth.signInWithEmailAndPassword(email, password)
  }

  const googleLogin = () => {
    var provider = new firebase.auth.GoogleAuthProvider()
    provider.setCustomParameters({ login_hint: "user@example.com" })
    firebase_auth
      .signInWithPopup(provider)
      .then(userdata => {
        console.log("google login ok")
      })
      .catch(err => {
        console.log("google login failed, ", err.message)
      })
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

  const facebookLogin = () => {
    var provider = new firebase.auth.FacebookAuthProvider()

    provider.setCustomParameters({
      login_hint: "user@example.com",
    })

    firebase_auth
      .signInWithPopup(provider)
      .then(userdata => {
        console.log("facebook login ok")
      })
      .catch(err => {
        console.log("facebook login fail,", err.message)
      })
  }

  return (
    <FirebaseAuthContext.Provider
      value={{
        facebookLogin,
        firebase_auth,
        firebaseAuthHelloworld,
        firebaseLogin,
        firebaseLogout,
        githubLogin,
        googleLogin,
        user_info,
      }}
    >
      {props.children}
    </FirebaseAuthContext.Provider>
  )
}

export default FirebaseAuthContext

export { FirebaseAuthContextProvider }
