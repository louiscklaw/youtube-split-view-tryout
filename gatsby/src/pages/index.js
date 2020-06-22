import React from "react"
import _ from "lodash"

import Layout from "../components/layout"

import { HelloworldPage } from "../utils/pages"

import LoginModal from '../components/modals/login-modal'
import AnnouncementModal from "../components/modals/announcement-modal"
import SettingsModal from '../components/modals/settings-modal'

import Footer from "../components/footer"

import LogoutButton from '../components/buttons/logout-button'

import {firebaseLogout} from '../utils/firebase'


function IndexPage() {
  let announce_ref = React.useRef()
  let [announce_show, setAnnouncementShow] = React.useState(true)
  let [settings_show, setSettingsShow] = React.useState(false)

  // handle announcement modal
  const showAnnounce = (e) => {setAnnouncementShow(true)}
  const closeAnnounce = (e) => { setAnnouncementShow(false) }

  // handle settings modal
  const showSettings = (e) => {setAnnouncementShow(true)}
  const closeSettings = (e) => {setSettingsShow(false)}

  const logoutOnClick = (e) => { firebaseLogout() }

  return (
    <Layout>

      <LogoutButton />

      <AnnouncementModal show={announce_show} onClose={closeAnnounce}/>
      <SettingsModal show={settings_show} onClose={closeSettings}/>

      <LoginModal />

      {HelloworldPage()}

      <Footer >
        <button onClick={showSettings}>settings</button>
        <button onClick={logoutOnClick}>logout</button>
        <button onClick={showAnnounce}>announcement</button>
      </Footer>

    </Layout>
  )
}

export default IndexPage
