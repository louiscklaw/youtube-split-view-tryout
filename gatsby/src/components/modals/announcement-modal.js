import React from "react"
import GlobalContext from "../../contexts/global-context"
import CloseButton from "../buttons/close-button"
import ModalContext from "../../contexts/modals-context"

function AnnouncementModal(props) {
  let { active_style } = props
  let { combineStyle } = React.useContext(GlobalContext)

  let {
    announcement_modal_ref,
    showAnnouncementModal,
    closeAnnouncementModal,
  } = React.useContext(ModalContext)

  const handleCloseButtonOnClick = () => {
    closeAnnouncementModal()
  }

  React.useEffect(() => {
    showAnnouncementModal()
  }, [])

  return (
    <div
      className={combineStyle([active_style.modal])}
      ref={announcement_modal_ref}
    >
      <div
        className={active_style.modalBackground}
        onClick={handleCloseButtonOnClick}
      ></div>

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
          <CloseButton onClick={handleCloseButtonOnClick} />
        </footer>
      </div>
    </div>
  )
}

export default AnnouncementModal
