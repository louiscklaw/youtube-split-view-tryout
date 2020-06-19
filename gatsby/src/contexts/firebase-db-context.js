import React from 'react'
import 'firebase/firestore'

import FirebaseContext from './firebase-context'

let init_context = {
  hello: 'world',
  firebase_db: null
}

let FirebaseDbContext = React.createContext(init_context)

function FirebaseDbContextProvider(props){
  let {firebase_app} = React.useContext(FirebaseContext)
  let firebase_db = firebase_app.firestore()

  let [list_record_value, setListValue] = React.useState()

  React.useEffect(() => {
    if (document.querySelectorAll('.update-value-form').length != 0){
      document.querySelectorAll('.update-value-form').forEach(form_ele => {
        form_ele.addEventListener('click', (e) => {
          e.preventDefault()

          let target = e.target
          let target_name = target.name
          let form_ele = ''


          switch(target_name) {
            case "btn_save":
              console.log('save clicked')

              form_ele = target.parentElement
              let target_dataset = form_ele.dataset
              let collection_name = target_dataset.collectionName
              let record_id = target_dataset.recordId

              console.log("collection_name", collection_name)
              console.log("record_id", record_id)
              console.log("payload ?", target)

              updateRecord(collection_name, record_id, {
                field1: form_ele.field1.value,
                field2: form_ele.field2.value
              })
                .then(() => {
                  listRecord(collection_name)
                })

              break;

              case "btn_reset":
              console.log('reset clicked')
              form_ele = target.parentElement
              form_ele.reset()
              break;

            default:
              console.log('ignored')
          }
        })


        form_ele.addEventListener('reset', () => {
          console.log('reset captured')
        })

      })
    }

  })

  React.useEffect(()=>{

    if (document.querySelectorAll('.list_record_row').length != 0 ){
      document.querySelectorAll('.list_record_row').forEach(list_ele =>{
        list_ele.addEventListener('click', (e) => {
          let target = e.target

          if (target.className == 'edit-button') {
            let target_tr = target.parentElement.parentElement
            let target_edit_panel = target_tr.querySelector('.edit-record')
            console.log(target_tr)
            target_edit_panel.style.display = 'block'
          }

          if (target.className == 'close-button') {
            let target_tr = target.parentElement.parentElement.parentElement.parentElement
            console.log(target_tr)
            // console.log(target_tr.querySelector('.edit-record'))
            let target_edit_panel = target_tr.querySelector('.edit-record')
            target_edit_panel.style.display = 'none'
          }
        })
      })
    }

  })

  const addingNewRecord = (collection_name,payload) => {
    firebase_db.collection(collection_name)
      .add(payload)
      .then(()=>{
        console.log('add new record done')
      })
      .catch((err) =>{
        console.log(err.message)
      })
  }

  const listRecord = (collection_name) => {
    firebase_db.collection(collection_name)
      .get()
      .then( querySnapshot => {
        setListValue(querySnapshot.docs.map(doc => {
          return(
            <tr key={`list_record_${doc.id}`} className="list_record_row">
              <td>
                <pre>{doc.id}</pre>
              </td>
              <td>
                <div>
                  { Object.keys(doc.data()).sort().map( x => { return( <pre> {doc.data()[x]} </pre> ) })
                  }
                </div>
                <div className="edit-record" style={{display: 'none'}}>{editRecordPanel(collection_name, doc)}</div>
              </td>
              <td>
                <button className="edit-button">edit</button>
              </td>
              <td>
                <button onClick={(e)=>{deleteRecord(collection_name,doc.id)}}> delete </button>
              </td>
            </tr>
          )
        }))
      })
  }

  const genRecordTable = () => {
    return (
      <table>
        <tbody>
          {list_record_value}
        </tbody>
      </table>
    )
  }

  const editRecordPanel = (collection_name, doc_content) => {
    let record_id = doc_content.id
    let doc_data = doc_content.data()
    return(
      <form
        className="update-value-form"
        name={`update_value_${collection_name}_${record_id}`}
        data-collection-name={collection_name}
        data-record-id={record_id}
        id="form"
        >
        {
          Object.keys(doc_data).sort().map( field_name => {
            return(
              <input name={field_name} key={`${record_id}_${field_name}`} type="text" defaultValue={doc_data[field_name]} />
            )
          })
        }
        <button name="btn_save" type="submit" >save</button>
        <button name="btn_reset" type="reset" >Reset</button>
        <button name="btn_cancel" type="reset" className="close-button">cancel</button>
      </form>
    )
  }

  const updateRecord = (collection_name, record_id, update_content) => {
    console.log(update_content)
    return firebase_db.collection(collection_name)
      .doc(record_id)
      .set(update_content)
      .catch((err)=>{
        alert('cannot update record due to ', err.message)
      })
  }

  const deleteRecord = (collection_name, record_id) => {
    firebase_db.collection(collection_name)
      .doc(record_id)
      .delete()
      .then(() => {
        console.log('delete done')
      })
      .catch((err)=>{
        alert('cannot delete due to ', err.message)
      })
  }

  const searchRecord = (collection_name, field, value) => {
    return firebase_db.collection(collection_name)
      .where(field, '==', value)
      .get()

  }


  return(
    <FirebaseDbContext.Provider value={{
      firebase_db,
      addingNewRecord,
      listRecord,
      genRecordTable,
      deleteRecord,
      searchRecord
    }}>
      {props.children}
    </FirebaseDbContext.Provider>
  )

}

export default FirebaseDbContext

export {FirebaseDbContextProvider}