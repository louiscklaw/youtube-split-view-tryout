import React from "react"

import ThemeContext from '../../contexts/theme-context'
import ModalContext from '../../contexts/modal-context'

function AnnouncementModal(props){
  let modal_ref = React.useRef()

  let {setAnnouncementModalRef, closeAnnouncementModal} = React.useContext(ModalContext)
  setAnnouncementModalRef(modal_ref)

  let {active_style} = React.useContext(ThemeContext)

  return(
    <>
      <div className={active_style.modal} ref={modal_ref}>
        <div className={active_style.modalBackground} onClick={closeAnnouncementModal}></div>

        <div className={active_style.modalCard}>
          <header className={active_style.modalCardHead}>
            <p className={active_style.modalCardTitle}>Announcement</p>
          </header>

          <section className={active_style.modalCardBody}>
            <p>
              作有往，等怕準命小電個。反那星頭工業。血社走地分全食回不行面本
              💞🔤📗🔵👌 👱🌲🔯🍣💵 🐪👫🐈📅📍🎻💼 🐣
            </p>
          </section>

          <footer className={active_style.modalCardFoot}>
            <button className={active_style.button} onClick={closeAnnouncementModal} >close</button>
          </footer>
        </div>
      </div>
    </>
  )
}


export default AnnouncementModal