import React from 'react'

import GlobalContext from '../contexts/global-context'
import ModalContext from '../contexts/modals-context'
import FirebaseMixinsContext from '../contexts/firebase-mixins'

function Footer(props){
  let {active_style} = props
  const {
    showSettingsModal,
    showAnnouncementModal
  } = React.useContext(ModalContext)

  const {firebaseLogout} = React.useContext(FirebaseMixinsContext)

  return(
    <div className={active_style.footerCustom}>
      <ul>
        <li><button onClick={showSettingsModal}>settings</button></li>
        <li><button onClick={firebaseLogout}>logout</button></li>
        <li><button onClick={showAnnouncementModal}>announcement</button></li>
      </ul>

      <div>
        logged in as blablabla
      </div>

    </div>
  )
}

export default Footer