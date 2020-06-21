import React from "react"

import GlobalContext from "../../contexts/global-context"
import CancelButton from "../buttons/cancel-button"
import SaveChangesButton from "../buttons/save-change-button"

function BulmaModalCard(props) {
  let { modal_ref } = props
  const { active_style } = React.useContext(GlobalContext)

  const handleOnCloseButtonClick = () => {
    modal_ref.current.classList.remove(active_style.isActive)
  }

  const handleBackgroundClick = () => {
    modal_ref.current.classList.remove(active_style.isActive)
  }

  const handleCloseButtonOnClick = () => {
    modal_ref.current.classList.remove(active_style.isActive)
  }

  const handleCancelButtonOnClick = () => {
    alert("handleCancelButtonOnClick")
  }

  const handleSaveChangesButtonOnClick = () => {
    alert("handlesavechangesbutton on click")
  }

  return (
    <div className={active_style.modal} ref={modal_ref}>
      <div
        className={active_style.modalBackground}
        onClick={handleBackgroundClick}
      ></div>
      <div className={active_style.modalCard}>
        <header className={active_style.modalCardHead}>
          <p className={active_style.modalCardTitle}>Modal title</p>
          <button className={active_style.delete} aria-label="close"></button>
        </header>
        <section className={active_style.modalCardBody}>
          {props.children}
        </section>
        <footer className={active_style.modalCardFoot}>
          <SaveChangesButton onClick={handleSaveChangesButtonOnClick} />
          <CancelButton onClick={handleCancelButtonOnClick} />
        </footer>
      </div>

      <button
        className={active_style.modalClose + " " + active_style.isLarge}
        aria-label="close"
        onClick={handleOnCloseButtonClick}
      />
    </div>
  )
}

export default BulmaModalCard
