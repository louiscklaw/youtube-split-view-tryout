import React from 'react'
import GlobalContext from '../../contexts/global-context'
import CloseButton from '../buttons/close-button'

function AnnouncementModal(props){
  const {active_style} = React.useContext(GlobalContext)

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

            <CloseButton onClick={props.closeButtonClick} />
          </footer>

        </div>
      </div>
    </>
  )
}


export default AnnouncementModal