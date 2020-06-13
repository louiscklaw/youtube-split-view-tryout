import React from 'react'

const GlobalContext = React.createContext()

let default_state = {
  hello: 'world',
  channel_list:{}
}

class GlobalContextProvider extends React.Component {
  constructor(props){
    super(props)
    this.state = default_state
  }

  componentDidMount = () => {
    console.log("global context did mount")
    fetch('http://localhost:3000/channels')
      .then(res => res.json())
      .then(json => this.setState({...this.state, channel_list: json}))
      .then( () => console.log(this.state))
      .catch(err => {
        console.log('error found on fetching json', err)
      })
  }

  helloworld = () => {
    console.log("helloworld from global context")
  }

  loadChannelList = () => {
    this.setState({...this.state, channel_list:{hello: 'world'}})
  }

  render(){
    return(
      <GlobalContext.Provider value={{
        ...this.state,
        helloworld: this.helloworld,
        loadChannelList: this.loadChannelList
      }}>
        {this.props.children}
      </GlobalContext.Provider>
    )
  }
}

export default GlobalContext
export {GlobalContextProvider}