import React from 'react'

import GlobalContext from './global-context'

const ModalContext = React.createContext()



function ModalContextProvider(props){
  const {active_style} = React.useContext(GlobalContext)
  const settings_modal_ref = React.useRef(null)

  let default_state = {
    hello:"world",
    announce_modal_ref: null
  }

  const helloworld = () => {
    alert("helloworld from modal context")
  }

  const showSettingsModal = () => {
    alert("show settings modal")
    // settings_modal_ref = 123
    // settings_modal_ref.current.classList.add(active_style.isActive)
  }

  return(
    <ModalContext.Provider value={{
      ...default_state,
      helloworld,
      showSettingsModal
    }}>
      {props.children}
    </ModalContext.Provider>
  )
}


export default ModalContext
export {ModalContextProvider}