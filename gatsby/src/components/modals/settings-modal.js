import React from 'react'

import SettingsContent from './settings-content'

import GlobalContext from '../../contexts/global-context'
import ModalContext from '../../contexts/modals-context'

import SaveChangeButton from '../buttons/save-change-button'
import CancelButton from '../buttons/cancel-button'


function SettingsModal(props){
  const {active_style} = React.useContext(GlobalContext)
  const { closeSettingsModal} = React.useContext(ModalContext)

  const closeSettingModal = () => {
    let ref = props.modal_ref
    ref.current.classList.remove(active_style.isActive)
  }

  const handleBackgroundClick = () => {

  }

  const handleSaveButtonClick = () =>{
    return closeSettingsModal()
  }

  const handleCancelButtonClick = () => {
    return closeSettingsModal()
  }

  return(
    <>
      <div className={active_style.modal+' '+active_style.isActive} ref={props.modal_ref}>
        <div className={active_style.modalBackground} onClick={handleBackgroundClick}></div>
        <div className={active_style.modalCard}>
          <header className={active_style.modalCardHead}>
            <p className={active_style.modalCardTitle}>
              settings
            </p>
          </header>

          <section className={active_style.modalCardBody}>

            <SettingsContent />


          </section>

          <footer className={active_style.modalCardFoot}>
            <SaveChangeButton onClick={handleSaveButtonClick} />
            <CancelButton onClick={handleCancelButtonClick} />
          </footer>

        </div>
      </div>
    </>
  )
}


export default SettingsModal