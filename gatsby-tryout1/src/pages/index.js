import React from "react"
import _ from "lodash"

import Loading from '../components/loading'

import { checkIsNotUndefined } from "../utils/mixins"

import ProfileContext from '../contexts/profile-context'

import Layout from "../components/layout"
import VideoBody from '../components/video_body'
import Footer from "../components/footer"
import SideBar from '../components/side-bar'

import LoginModal from "../components/modals/login-modal"
import AnnouncementModal from "../components/modals/announcement-modal"
import SettingsModal from "../components/modals/settings-modal"
import LogoutButton from "../components/buttons/logout-button"

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {showSavingNotification} from '../components/notification/notify_saving'


function MainCanvas(props){
  // modals start
  let [announce_show, setAnnouncementShow] = React.useState(true)
  let [settings_show, setSettingsShow] = React.useState(false)

  const test_notify = () => {
    showSavingNotification()
  }

  // handle announcement modal
  const showAnnounce = e => {
    setAnnouncementShow(true)
  }
  const closeAnnounce = e => {
    setAnnouncementShow(false)
  }

  // handle settings modal
  const showSettings = e => {
    setSettingsShow(true)
  }
  const closeSettings = e => {
    setSettingsShow(false)
  }
  // modals end

  return(
    <>
      <AnnouncementModal show={announce_show} onClose={closeAnnounce} />
      <SettingsModal show={settings_show} onClose={closeSettings} />
      <LoginModal />

      {/*
        <button onClick={test_notify}>test notify</button>
      */}

      <ToastContainer />

      <VideoBody />

      <SideBar />

      <Footer>
        <ul>
          <li>
            <button onClick={showSettings}>settings</button>
          </li>
          <li>
            <LogoutButton />
          </li>
          <li>
            <button onClick={showAnnounce}>announcement</button>
          </li>
        </ul>
      </Footer>
    </>
  )
}

function IndexPage(props){
  let [is_loading, setIsLoading] = React.useState(false)
  let [debug_text, setDebugText] = React.useState('')

  let [test_profile, setTestProfile] = React.useState({})
  let profile_context = React.useContext(ProfileContext)
  React.useEffect(()=>{
    if (checkIsNotUndefined(profile_context)){
      let {current_profile} = profile_context
      setTestProfile(current_profile)
      setIsLoading(false)
      setDebugText(JSON.stringify(current_profile))
    }else{
      console.log('index.js', 'profile_context not ready')
    }

  },[profile_context])

  return(
    <Layout>
      {/* { debug_text } */}
      {is_loading ? <Loading /> : <MainCanvas profile={test_profile} />}
    </Layout>
  )
}

export default IndexPage