import React from 'react'

import ThemeContext from '../contexts/theme-context'
import ModalContext from '../contexts/modal-context'

function Footer(props){
  const {active_style} = React.useContext(ThemeContext)
  const {openTestModal, openAnnouncementModal} = React.useContext(ModalContext)

  return(
    <>
      Footer
      <button className={active_style.button} onClick={openTestModal}>open modal in footer.js</button>
      <ul>
        <li>
          <button className={active_style.button} onClick={openTestModal}>settings</button>
        </li>
        <li>
        <button className={active_style.button} onClick={openTestModal}>logout</button>
        </li>
        <li>
          <button className={active_style.button} onClick={openAnnouncementModal}>announcement</button>
        </li>
        </ul>
    </>
  )
}

export default Footer