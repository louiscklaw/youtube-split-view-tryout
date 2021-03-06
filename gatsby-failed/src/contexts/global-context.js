import React from 'react'

import style from '../scss/style.module.scss'
import style_narrow from '../scss/style_narrow.module.scss'

import config from '../config'

const {narrow_screen_checkpoint} = config
const GlobalContext = React.createContext()

let default_state = {
  hello: 'world',
  style,
  style_narrow,
  active_style: style,
  channel_list:{},
  windowWdith: 0,
  windowHeight: 0,
  narrow_window: false
}

class GlobalContextProvider extends React.Component {
  constructor(props){
    super(props)
    this.state = default_state
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  combineStyle = (in_style) =>{
    return in_style.join(' ')
  }

  checkNarrowWindow = (windowWidth) => {
    console.log('checkNarrowWindow', windowWidth < narrow_screen_checkpoint)
    return windowWidth < narrow_screen_checkpoint
  }

  updateDimensions() {
    let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
    let windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;

    let narrow_window = this.checkNarrowWindow(windowWidth)
    let active_style = narrow_window ? style_narrow: style

    this.setState({ ...this.state,
      windowWidth,
      windowHeight,
      narrow_window,
      active_style
    });

  }

  componentDidMount = () => {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);

    console.log("global context did mount")
    fetch(config.CHANNELS_API_ENDPOINT)
      .then(res => res.json())
      .then(json => this.setState({...this.state, channel_list: json}))
      // .then( () => console.log(this.state))
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

  saveChannels = (payload) => {
    console.log('savechannels')

    fetch(config.CHANNELS_API_ENDPOINT,
      {
        method: 'POST',
        body: JSON.stringify(payload,{completed: true}),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      .then(response => response.json())
      .then(json => console.log(json))

  }

  render(){
    return(
      <GlobalContext.Provider value={{
        ...this.state,
        helloworld: this.helloworld,
        loadChannelList: this.loadChannelList,
        combineStyle: this.combineStyle,
        saveChannels: this.saveChannels
      }}>
        {this.props.children}
      </GlobalContext.Provider>
    )
  }
}

export default GlobalContext
export {GlobalContextProvider}