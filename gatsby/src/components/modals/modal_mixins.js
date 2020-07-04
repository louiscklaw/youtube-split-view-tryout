import React from 'react'

import TestModal from './test-modal'
import AnnouncementModal from './announcement-modal'
import SettingsModal from './settings-modal'
import LoginModal from './login-modal'

function ModalMixins(props){
  return(
    <>
      <TestModal />
      <AnnouncementModal />
      <SettingsModal />
      <LoginModal />
    </>
  )
}


export default ModalMixins