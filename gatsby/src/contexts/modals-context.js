import React from 'react'

import GlobalContext from './global-context'

import SettingsModal from '../components/modals/settings-modal'
import AnnouncementModal from '../components/modals/announcement-modal'

const ModalContext = React.createContext()

function ModalContextProvider(props){
  const {active_style} = React.useContext(GlobalContext)
  const settings_modal_ref = React.useRef(null)
  const announcement_modal_ref = React.useRef(null)

  let default_state = {
    hello:"world"
  }

  const helloworld = () => {
    alert("helloworld from modal context")
  }

  const showModal = ( target_modal_ref ) =>{
    target_modal_ref.current.classList.add(active_style.isActive)
  }

  const closeModal = (target_modal_ref) => {
    target_modal_ref.current.classList.remove(active_style.isActive)
  }

  const showAnnouncementModal = () => {
    // alert("show settings modal")
    showModal(announcement_modal_ref)
  }

  const showSettingsModal = () => {
    // alert("show settings modal")
    showModal(settings_modal_ref)
  }

  const closeAnnouncementModal = () => {
    // alert("show settings modal")
    closeModal(announcement_modal_ref)
  }

  const closeSettingsModal = () => {
    // alert("show settings modal")
    closeModal(settings_modal_ref)
  }

  return(
    <ModalContext.Provider value={{
      ...default_state, helloworld,
      showSettingsModal,
      showAnnouncementModal,
      closeSettingsModal,
      closeAnnouncementModal
    }}>
      <SettingsModal modal_ref={settings_modal_ref}/>
      <AnnouncementModal modal_ref={announcement_modal_ref} />
      {props.children}
    </ModalContext.Provider>
  )
}


export default ModalContext
export {ModalContextProvider}