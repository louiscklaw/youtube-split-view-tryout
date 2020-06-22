import React from "react"

import style from "../../scss/style.module.scss"

import { combineStyle, checkIsNotUndefined } from "../../utils/mixins"

import ThemeContext from "../../contexts/theme-context"

import CloseButton from "../buttons/close-button"

function AnnouncementModal(props) {
  let theme_context = React.useContext(ThemeContext)
  let active_style = checkIsNotUndefined(theme_context)
    ? theme_context.active_style
    : style

  let { show, onClose } = props

  let [modal_style, setModalStyle] = React.useState([active_style.modal])

  React.useEffect(() => {
    if (show) {
      setModalStyle([active_style.modal, active_style.isActive])
    } else {
      setModalStyle([active_style.modal])
    }
  }, [show])

  return (
    <>
      <div className={combineStyle(modal_style)}>
        <div className={active_style.modalBackground} onClick={onClose}></div>

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
            <CloseButton onClick={onClose} />
          </footer>
        </div>
      </div>
    </>
  )
}

export default AnnouncementModal
