import React from 'react'

let default_state = {
  hello: 'world'
}

const GlobalContext = React.createContext()

class GlobalContextProvider extends React.Component{
  constructor(props){
    super(props)
    this.state=default_state
  }

  sayHello = () =>{
    alert("hello")
  }

  render(){
    return(
      <GlobalContext.Provider value={{
        ...this.state,
        sayHello: this.sayHello
      }}>
        {this.props.children}
      </GlobalContext.Provider>
    )
  }
}
export default GlobalContext
export {GlobalContextProvider}