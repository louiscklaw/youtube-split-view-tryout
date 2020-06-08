import React from 'react'

let default_value = {
  channel_list:[]
}
const DBContext = React.createContext()

class DBContextProvider extends React.Component{
  constructor(props){
    super(props)
    this.state = default_value
  }

  getDocument = (document_wanted) =>{
    return fetch('http://localhost:3000/'+document_wanted)
    .then( result => result.json())
  }

  render(){
    return(
      <DBContext.Provider value={{
        ...this.state,
        getDocument:this.getDocument
      }}>
        {this.props.children}
      </DBContext.Provider>
    )

  }
}

export default DBContext
export {DBContextProvider}
