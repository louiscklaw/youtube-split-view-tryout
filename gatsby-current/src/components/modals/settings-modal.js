import React from "react"

import ProfileContext from '~contexts/profile-context'
import ThemeContext from "~contexts/theme-context"
import ModalContext from '~contexts/modal-context'

import SevenChannelSelect from './seven-channel-select'

// import ProfileContext from '~contexts/profile-context'
// import FirebaseMixinsContext from "../../contexts/firebase-mixins"

function SettingsModal(props) {
  let {active_style} = React.useContext(ThemeContext)
  let {current_profile} = React.useContext(ProfileContext)

  let modal_ref = React.useRef()
  let { setSettingsModalRef, closeSettingsModal } = React.useContext(ModalContext)
  setSettingsModalRef(modal_ref)

  return(
    <div className={active_style.modal} ref={modal_ref}>
      <div className={active_style.modalBackground} ></div>\
      <div className={active_style.modalCard}>
        <header className={active_style.modalCardHead}>
          <p className={active_style.modalCardTitle}>
            settings
          </p>
        </header>

        <div className={active_style.modalCardBody}>
          <SevenChannelSelect defaultValues={current_profile.channel_setting} />
        </div>

        <button className={active_style.button} onClick={closeSettingsModal}>close</button>
      </div>
    </div>
  )
}

export default SettingsModal
