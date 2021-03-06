import React from 'react'
import {Link} from "gatsby"

import {isDefined} from '~mixins/general'

import ThemeContext from '~contexts/theme-context'
import ModalContext from '~contexts/modal-context'
import FirebaseAuthContext from '~contexts/firebase-auth-context'

function Footer(props){
  const {active_style} = React.useContext(ThemeContext)
  const {openSettingsModal, openTestModal, openAnnouncementModal} = React.useContext(ModalContext)
  const {user_info, firebaseLogout} = React.useContext(FirebaseAuthContext)

  let [ user_id, setUserId ] = React.useState( '' )
  React.useEffect( () => {
    if ( isDefined( user_info.raw_user ) ) {
      setUserId( JSON.stringify( user_info.raw_user.uid ) )
    }
  }, [ user_info ] )

  return(
    <>
      <div className={active_style.footerCustom}>
        {user_id}
        {props.children}



        <ul>
          <li>
            <button className={active_style.button} onClick={openSettingsModal}>settings</button>
          </li>

          <li>
            <Link to="/logout" className={active_style.button}>Logout</Link>
          </li>

          <li>
            <button className={active_style.button} onClick={openAnnouncementModal}>announcement</button>
          </li>
          <li>
            <Link to="/debug">debug</Link>
          </li>
        </ul>

      </div>

    </>
  )
}

export default Footer