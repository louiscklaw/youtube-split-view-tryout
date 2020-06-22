import firebase from "firebase/app"
// import firebase_auth from "firebase/auth"

const googleLogin = () => {
  var provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters( {
    login_hint: "user@example.com"
  } )
  firebase.auth()
    .signInWithPopup( provider )
    .then( userdata => {
      console.log( "google login ok" )
    } )
    .catch( err => {
      console.log( "google login failed, ", err.message )
    } )
}

const githubLogin = () => {
  var provider = new firebase.auth.GithubAuthProvider()

  provider.setCustomParameters( {
    login_hint: "user@example.com",
  } )

  firebase.auth()
    .signInWithPopup( provider )
    .then( userdata => {
      console.log( "github login ok" )
    } )
    .catch( err => {
      console.log( "github login fail,", err.message )
    } )
}

const facebookLogin = () => {
  var provider = new firebase.auth.FacebookAuthProvider()

  provider.setCustomParameters( {
    login_hint: "user@example.com",
  } )

  firebase.auth()
    .signInWithPopup( provider )
    .then( userdata => {
      console.log( "facebook login ok" )
    } )
    .catch( err => {
      console.log( "facebook login fail,", err.message )
    } )
}

const firebaseLogout = () => {
  // alert('calling firebase auth context logout')
  console.log( "calling firebaseLogout" )
  firebase.auth().signOut()
}

const firebaseLogin = ( email, password ) => {
  return firebase.auth().signInWithEmailAndPassword( email, password )
}

export {
  googleLogin,
  githubLogin,
  facebookLogin,
  firebaseLogin,
  firebaseLogout
}