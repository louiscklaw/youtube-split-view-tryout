import React from "react"

import ThemeContext from '../../contexts/theme-context'
import ModalContext from '../../contexts/modal-context'

function TestModal(props) {
  let test_modal_ref = React.useRef()

  let {setTestModalRef, closeTestModal} = React.useContext(ModalContext)
  setTestModalRef(test_modal_ref)

  let {active_style} = React.useContext(ThemeContext)

  // console.log(active_style)
  return(
    <>
      <div className={active_style.modal} ref={test_modal_ref}>
        <div className={active_style.modalBackground}></div>
        <div className={active_style.modalCard}>
          <header className={active_style.modalCardHead}>
            <p className={active_style.modalCardTitle}>Modal title</p>
            <button className={active_style.delete} aria-label="close"></button>
          </header>
          <section className={active_style.modalCardBody}>
            Content
          </section>
          <footer className={active_style.modalCardFoot}>
            <button className={active_style.button+' '+active_style.isSuccess}>Save changes</button>
            <button className={active_style.button} onClick={closeTestModal}>Cancel</button>
          </footer>
        </div>
      </div>
    </>
  )
}


export default TestModal
