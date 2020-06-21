import React from 'react'

import style from '../scss/style.module.scss'
import style_narrow from '../scss/style_narrow.module.scss'

import config from '../config'

const {narrow_screen_checkpoint} = config
const GlobalContext = React.createContext()

let default_state = {
  user_settings:{
    hello: 'world'
  }
}

class GlobalContextProvider extends React.Component {
  constructor(props){
    super(props)
    this.state = default_state
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  helloGlobalContext = () => {

  }

  setUserSettings = (settings_in) => {
    this.setState({...this.state, user_settings: settings_in})
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
        this.setState({...this.state, channel_list: {
          channels: {
            0: {
              video_id: "W7wTdvu_0dQ",
              video_title: "title1",
              channel_type: "youtube"
            },
            1: {
              video_id: "W7wTdvu_0dQ",
              video_title: "title1",
              channel_type: "youtube"
            }
          }
        }})
      })
  }

  helloworld = () => {
    console.log("helloworld from global context")
  }

  checkDataReady = (obj_in) => {
    return (typeof(obj_in) != 'undefined' && obj_in != null)
  }

  render(){
    return(
      <GlobalContext.Provider value={{
        ...this.state,
        helloworld: this.helloworld,
        loadChannelList: this.loadChannelList,
        combineStyle: this.combineStyle,
        saveChannels: this.saveChannels,
        hello: 'world',
        checkDataReady: this.checkDataReady,
        update_user_settings: this.update_user_settings,
        get_user_settings: this.get_user_settings,
        helloGlobalContext:this.helloGlobalContext,
        setUserSettings: this.setUserSettings
      }}>
        {this.props.children}
      </GlobalContext.Provider>
    )
  }
}

export default GlobalContext
export {GlobalContextProvider}