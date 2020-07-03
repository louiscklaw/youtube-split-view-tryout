import React from "react"

import config from "../config"

const { narrow_screen_checkpoint } = config

let default_context = {
  hello: 'world', setHello: () => {},

}

const GlobalContext = React.createContext(default_context)

function GlobalContextProvider(props){
  let [hello, setHello] = React.useState({})

  return(
    <GlobalContext.Provider value={{
      hello, setHello
    }}>
      {props.children}
    </GlobalContext.Provider>
  )

}

export default GlobalContext
export { GlobalContextProvider }
