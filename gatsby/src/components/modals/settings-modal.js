import React from 'react'

import SettingsContent from './settings-content'

import GlobalContext from '../../contexts/global-context'
import ModalContext from '../../contexts/modals-context'

import SaveChangeButton from '../buttons/save-change-button'
import CancelButton from '../buttons/cancel-button'


function SettingsModal(props){
  const {active_style, combineStyle} = React.useContext(GlobalContext)
  const { closeSettingsModal} = React.useContext(ModalContext)

  const handleBackgroundClick = () => {

  }

  const handleSaveButtonClick = () =>{
    return closeSettingsModal()
  }

  const handleCancelButtonClick = () => {
    return closeSettingsModal()
  }

  const handleSaveSetting = (e) => {
    e.preventDefault();
    console.log('calling me ? ')
  }

  return(
    <>
      <div className={active_style.modal} ref={props.modal_ref}>
        <div className={active_style.modalBackground} onClick={handleBackgroundClick}></div>
        <div className={active_style.modalCard}>
          <header className={active_style.modalCardHead}>
            <p className={active_style.modalCardTitle}>
              settings
            </p>
          </header>


          <form onSubmit={handleSaveSetting}>
            <section className={active_style.modalCardBody}>
              <SettingsContent />
            </section>

            <footer className={active_style.modalCardFoot}>




              <div className={combineStyle([active_style.field, active_style.isGrouped])} >
                <div className={active_style.control}>
                  <SaveChangeButton onClick={handleSaveButtonClick} />
                </div>

                <div className={active_style.control}>
                  <CancelButton onClick={handleCancelButtonClick} />
                </div>
              </div>



            </footer>

          </form>

        </div>
      </div>
    </>
  )
}


export default SettingsModal