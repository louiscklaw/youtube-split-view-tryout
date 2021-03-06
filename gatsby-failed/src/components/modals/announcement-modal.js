import React from 'react'
import GlobalContext from '../../contexts/global-context'
import CloseButton from '../buttons/close-button'
import ModalContext from '../../contexts/modals-context'

function AnnouncementModal(props){
  const {active_style} = React.useContext(GlobalContext)
  const {closeAnnouncementModal} = React.useContext(ModalContext)

  return(
    <>
      <div className={active_style.modal} ref={props.modal_ref}>
        <div className={active_style.modalBackground} onClick={props.handleBackgroundClick}></div>
        <div className={active_style.modalCard}>
          <header className={active_style.modalCardHead}>
            <p className={active_style.modalCardTitle}>
              {props.title}
            </p>
          </header>

          <section className={active_style.modalCardBody}>
            {props.children}
          </section>

          <footer className={active_style.modalCardFoot}>

            <CloseButton onClick={closeAnnouncementModal} />
          </footer>

        </div>
      </div>
    </>
  )
}


export default AnnouncementModal