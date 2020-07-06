import React from 'react'
import {funcPlaceholder} from '~mixins/general'

import FirebaseContext from "./firebase-context"

let default_context = {
  helloFirebaseDBContext: funcPlaceholder,

  addingNewRecord: funcPlaceholder,
  listRecord: funcPlaceholder,
  updateRecord: funcPlaceholder,
  deleteRecord: funcPlaceholder,
  searchRecord: funcPlaceholder,
  getSettingsFromFirebase: funcPlaceholder,
  saveSettingsToFirebase: funcPlaceholder,
  getDoc: funcPlaceholder
}

let FirebaseDbContext = React.createContext(default_context)

function FirebaseDbContextProvider(props) {
  let { firebase_db } = React.useContext(FirebaseContext)

  const helloFirebaseDBContext = () => {
    console.log("firebase-db-context.js", "hello firebaseDBContext")
  }

  const addingNewRecord = (collection_name, payload) => {
    firebase_db
      .collection(collection_name)
      .add(payload)
      .then(() => {
        console.log("add new record done")
      })
      .catch(err => {
        console.log(err.message)
      })
  }

  const listRecord = collection_name => {
    firebase_db
      .collection(collection_name)
      .get()
      .then(querySnapshot => {
        console.log(querySnapshot)
      })
  }

  const updateRecord = (collection_name, record_id, update_content) => {
    console.log(update_content)
    return firebase_db
      .collection(collection_name)
      .doc(record_id)
      .set(update_content)
      .catch(err => {
        alert("cannot update record due to ", err.message)
      })
  }

  const deleteRecord = (collection_name, record_id) => {
    firebase_db
      .collection(collection_name)
      .doc(record_id)
      .delete()
      .then(() => {
        console.log("delete done")
      })
      .catch(err => {
        alert("cannot delete due to ", err.message)
      })
  }

  const searchRecord = (collection_name, field, value) => {
    return firebase_db
      .collection(collection_name)
      .where(field, "==", value)
      .get()
  }

  const getDoc = (collection_name, doc_id) => {
    console.log("getDoc", collection_name, doc_id)
    return firebase_db.collection(collection_name).doc(doc_id)
  }

  const getSettingsFromFirebase = uid => {
    console.log("getSettingsFromFirebase uid", uid)
    return getDoc("user_settings", uid).get()
  }

  const saveSettingsToFirebase = (uid, settings_in) => {
    return getDoc("user_settings", uid).set(settings_in)
  }

  return(
    <FirebaseDbContext.Provider value={{
      helloFirebaseDBContext,
      addingNewRecord,
      listRecord,
      updateRecord,
      deleteRecord,
      searchRecord,
      getSettingsFromFirebase,
      saveSettingsToFirebase,
      getDoc
    }}>
      {props.children}
    </FirebaseDbContext.Provider>
  )
}

export default FirebaseDbContext

export { FirebaseDbContextProvider }
