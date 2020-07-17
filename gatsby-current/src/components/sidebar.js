import React from 'react'
import {Link} from "gatsby"

import GlobalContext from '../contexts/global-context'
import ThemeContext from '../contexts/theme-context'
import ModalContext from '../contexts/modal-context'
import FirebaseAuthContext from '../contexts/firebase-auth-context'

function Sidebar(props){
  const {combineStyle} = React.useContext(GlobalContext)
  const {active_style} = React.useContext(ThemeContext)
  const {openSettingsModal, openAnnouncementModal} = React.useContext(ModalContext)
  const {firebaseLogout} = React.useContext(FirebaseAuthContext)

  return(
    <>
      <div className={active_style.sidebarContainer}>
        <Link to="/debug">debug</Link>

        <div className={combineStyle([
          active_style.sidebarButton,
          active_style.button
          ])}
          onClick={firebaseLogout}
          >
          <i className={combineStyle([
            active_style.fas,
            active_style.faSignInAlt
            ])}></i>
        </div>


        <div className={combineStyle([
          active_style.sidebarButton,
          active_style.button
          ])}
          onClick={openSettingsModal}
          >
          <i className={combineStyle([
            active_style.fas,
            active_style.faCogs
            ])}></i>
        </div>

        <div className={combineStyle([
          active_style.sidebarButton,
          active_style.button
          ])}
          onClick={openAnnouncementModal}
          >
          <i className={combineStyle([
            active_style.fas,
            active_style.faBullhorn
            ])}></i>
        </div>
      </div>
    </>
  )
}

export default Sidebar