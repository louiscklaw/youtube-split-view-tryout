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
          <i className="fas fa-sign-in-alt"></i>
        </div>


        <div className={combineStyle([
          active_style.sidebarButton,
          active_style.button
          ])}
          onClick={openSettingsModal}
          >
          <i className="fas fa-cogs"></i>
        </div>

        <div className={combineStyle([
          active_style.sidebarButton,
          active_style.button
          ])}
          onClick={openAnnouncementModal}
          >
          <i className="fas fa-bullhorn"></i>
        </div>
      </div>
    </>
  )
}

export default Sidebar