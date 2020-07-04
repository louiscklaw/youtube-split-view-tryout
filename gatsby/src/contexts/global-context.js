import React from "react"

import config from "../config"

const { narrow_screen_checkpoint } = config

let default_context = {
  hello: 'world', setHello: () => {},
  combineStyle: ()=>{}
}

const GlobalContext = React.createContext(default_context)

function GlobalContextProvider(props){
  let [hello, setHello] = React.useState({})

  const combineStyle = in_style => {
    return in_style.join(" ")
  }

  return(
    <GlobalContext.Provider value={{
      hello, setHello,
      combineStyle
    }}>
      {props.children}
    </GlobalContext.Provider>
  )

}

export default GlobalContext
export { GlobalContextProvider }
