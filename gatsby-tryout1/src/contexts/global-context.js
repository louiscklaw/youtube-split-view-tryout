import React from "react"

import config from "../config"

const { narrow_screen_checkpoint } = config
const GlobalContext = React.createContext()

let default_state = {
  user_settings: {
    hello: "world",
  },
}

class GlobalContextProvider extends React.Component {
  constructor(props) {
    super(props)
    this.state = default_state
  }

  helloGlobalContext = () => {}

  setUserSettings = settings_in => {
    this.setState({ ...this.state, user_settings: settings_in })
  }

  combineStyle = in_style => {
    return in_style.join(" ")
  }

  checkNarrowWindow = windowWidth => {
    console.log("checkNarrowWindow", windowWidth < narrow_screen_checkpoint)
    return windowWidth < narrow_screen_checkpoint
  }

  componentDidMount = () => {
    console.log("global context did mount")
    fetch(config.CHANNELS_API_ENDPOINT)
      .then(res => res.json())
      .then(json => this.setState({ ...this.state, channel_list: json }))
      // .then( () => console.log(this.state))
      .catch(err => {
        console.log("error found on fetching json", err)
        this.setState({
          ...this.state,
          channel_list: {
            channels: {
              0: {
                video_id: "W7wTdvu_0dQ",
                video_title: "title1",
                channel_type: "youtube",
              },
              1: {
                video_id: "W7wTdvu_0dQ",
                video_title: "title1",
                channel_type: "youtube",
              },
            },
          },
        })
      })
  }

  helloworld = () => {
    console.log("helloworld from global context")
  }

  checkKeyExist = (d_in, key_wanted) => {
    return Object.keys(d_in).indexOf(key_wanted) > -1
  }

  checkDataReady = obj_in => {
    return typeof obj_in != "undefined" && obj_in != null
  }

  render() {
    return (
      <GlobalContext.Provider
        value={{
          ...this.state,
          helloworld: this.helloworld,
          loadChannelList: this.loadChannelList,
          combineStyle: this.combineStyle,
          saveChannels: this.saveChannels,
          hello: "world",
          checkDataReady: this.checkDataReady,
          update_user_settings: this.update_user_settings,
          get_user_settings: this.get_user_settings,
          helloGlobalContext: this.helloGlobalContext,
          setUserSettings: this.setUserSettings,
          checkKeyExist: this.checkKeyExist,
        }}
      >
        {this.props.children}
      </GlobalContext.Provider>
    )
  }
}

export default GlobalContext
export { GlobalContextProvider }
