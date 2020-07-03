import React from 'react'
import ThemeContext from './theme-context'

let default_context = {
  hello: 'world', setHello: () => {},
  test_modal_ref:{}, setTestModalRef: () => {}, closeTestModal: () => {}, openTestModal: () => {},
  announcement_modal_ref:{}, setAnnouncementModalRef: () => {}, closeAnnouncementModal: () => {}, openAnnouncementModal: () => {},
}

let ModalContext = React.createContext(default_context)



function ModalContextProvider(props){
  let [hello, setHello] = React.useState({})

  let {active_style} = React.useContext(ThemeContext)

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
  // let [login_modal_ref, setLoginModalRef, closeLoginModal, openLoginModal] = createModalHandler()

  return(
    <ModalContext.Provider value={{
      hello, setHello,
      test_modal_ref, setTestModalRef, closeTestModal, openTestModal,
      login_modal_ref, setLoginModalRef, closeLoginModal, openLoginModal,
      announcement_modal_ref, setAnnouncementModalRef, closeAnnouncementModal, openAnnouncementModal
    }}>
      {props.children}
    </ModalContext.Provider>
  )
}


export default ModalContext
export {ModalContextProvider}
