import React from 'react'
import ThemeContext from './theme-context'

import TestModal from '../components/modals/test-modal'
import AnnouncementModal from '../components/modals/announcement-modal'
import SettingsModal from '../components/modals/settings-modal'

const funcPlaceholder = () => {}

let default_context = {
  hello: 'world', setHello: () => {},

  test_modal_ref:{},

  setTestModalRef: funcPlaceholder,
  closeTestModal: funcPlaceholder,
  openTestModal: funcPlaceholder,

  announcement_modal_ref:{},
  setAnnouncementModalRef: funcPlaceholder,
  closeAnnouncementModal: funcPlaceholder,
  openAnnouncementModal: funcPlaceholder,

  login_modal_ref: {},
  setLoginModalRef: funcPlaceholder,
  closeLoginModal: funcPlaceholder,
  openLoginModal: funcPlaceholder,

  settings_modal_ref: {},
  setSettingsModalRef: funcPlaceholder,
  closeSettingsModal: funcPlaceholder,
  openSettingsModal: funcPlaceholder

}

let ModalContext = React.createContext(default_context)



function ModalContextProvider(props){
  let {active_style} = React.useContext(ThemeContext)

  let [hello, setHello] = React.useState({})

  const createModalHandler = () => {
    let [test_modal_ref, setTestModalRef] = React.useState({})

    const closeTestModal = () => {
      test_modal_ref.current.classList.remove(active_style.isActive)
    }

    const openTestModal = () => {
      test_modal_ref.current.classList.add(active_style.isActive)
    }

    return [test_modal_ref, setTestModalRef, closeTestModal, openTestModal]
  }

  let [test_modal_ref, setTestModalRef, closeTestModal, openTestModal] = createModalHandler()
  let [login_modal_ref, setLoginModalRef, closeLoginModal, openLoginModal] = createModalHandler()
  let [announcement_modal_ref, setAnnouncementModalRef, closeAnnouncementModal, openAnnouncementModal] = createModalHandler()
  let [settings_modal_ref, setSettingsModalRef, closeSettingsModal, openSettingsModal] = createModalHandler()
  // let [login_modal_ref, setLoginModalRef, closeLoginModal, openLoginModal] = createModalHandler()

  return(
    <ModalContext.Provider value={{
      hello, setHello,
      test_modal_ref, setTestModalRef, closeTestModal, openTestModal,
      login_modal_ref, setLoginModalRef, closeLoginModal, openLoginModal,
      announcement_modal_ref, setAnnouncementModalRef, closeAnnouncementModal, openAnnouncementModal,
      settings_modal_ref, setSettingsModalRef, closeSettingsModal, openSettingsModal
    }}>

      {props.children}
    </ModalContext.Provider>
  )
}


export default ModalContext
export {ModalContextProvider}
