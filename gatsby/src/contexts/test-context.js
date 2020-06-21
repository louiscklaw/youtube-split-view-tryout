import React from 'react'

let default_value = {
  hello:'world',
  current_settings: {}
}

let TestContext = React.createContext()

class TestContextProvider extends React.Component {
  constructor(props){
    super(props)
    this.state = {hello:'123'}
  }

  setHello = (to) =>{
    this.setState({
      ...this.state, hello:to
    })
  }

  render(){
    return(
      <TestContext.Provider value={{
        ...this.state,
        setHello: this.setHello
      }}>
        {this.props.children}
      </TestContext.Provider>
    )
  }
}


export default TestContext
export {TestContextProvider}