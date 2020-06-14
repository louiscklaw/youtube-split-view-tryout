import React from 'react'

import GlobalContext from '../contexts/global-context'
import ModalContext from '../contexts/modals-context'

function Footer(){
  const {active_style} = React.useContext(GlobalContext)
  const {
    showSettingsModal,
    showAnnouncementModal
  } = React.useContext(ModalContext)

  return(
    <div className={active_style.footerCustom}>
      <div>this is footer</div>

      <ul>
        <li><div onClick={()=>{showSettingsModal()}}>settings</div></li>
        <li>login</li>
        <li><div onClick={()=>{showAnnouncementModal()}}>announcement</div></li>
      </ul>

    </div>
  )
}

export default Footer