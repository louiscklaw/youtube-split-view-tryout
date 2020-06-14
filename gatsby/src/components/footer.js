import React from 'react'

import GlobalContext from '../contexts/global-context'
import ModalContext from '../contexts/modals-context'
import SettingsModal from '../components/modals/settings-modal'

function Footer(){
  const {active_style} = React.useContext(GlobalContext)
  // const {showSettingsModal} = React.useContext(ModalContext)
  const settings_modal_ref = React.useRef(null)

  const showModal = () => {
    settings_modal_ref.current.classList.add(active_style.isActive)
  }

  return(
    <div className={active_style.footerCustom}>
      <div>this is footer</div>
      <SettingsModal settings_modal_ref={settings_modal_ref}/>
      <ul>
        <li><div onClick={(e)=>{showModal()}}>settings</div></li>
        <li>login</li>
        <li>announcement</li>
      </ul>

    </div>
  )
}

export default Footer