import React from "react"
import _ from "lodash"

import style from "../scss/style.module.scss"
import ThemeContext from "../contexts/theme-context"
import { checkIsNotUndefined } from "../utils/mixins"

import ProfileContext from '../contexts/profile-context'

import Layout from "../components/layout"
import Footer from "../components/footer"

import { firebaseLogout } from "../utils/firebase"
import { HelloworldPage } from "../utils/pages"

import LoginModal from "../components/modals/login-modal"
import AnnouncementModal from "../components/modals/announcement-modal"
import SettingsModal from "../components/modals/settings-modal"
import LogoutButton from "../components/buttons/logout-button"

import MainChannel from "../components/main-channel"
import BottomPreview from "../components/BottomPreview"
import RightPreview from "../components/RightPreview"

import VideoChannels from '../components/video-channels'

function Loading(props) {
  return <>loading</>
}

function MainCanvas(props) {
  let {profile} = props

  let placeholder_main_ref = React.useRef()
  let video_main_ref = React.useRef()

  let theme_context = React.useContext(ThemeContext)
  let active_style = checkIsNotUndefined(theme_context)
    ? theme_context.active_style
    : style

  let narrow_window = checkIsNotUndefined(theme_context)
    ? theme_context.narrow_window
    : false

  let [announce_show, setAnnouncementShow] = React.useState(true)
  let [settings_show, setSettingsShow] = React.useState(false)

  let profile_context = React.useContext(ProfileContext)
  let current_profile = checkIsNotUndefined(profile_context)
    ? profile_context.current_profile
    : {}

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

  const placeIntoPosition = (ele_video, ele_placeholder) => {
    console.log('placeinto position', ele_video)
    let position_of_ele_video = ele_video.getAttribute('data-position')
    // let ele_placeholder = getPlaceholderById(position_of_ele_video)

    ele_video.style.position = "fixed"
    ele_video.style.top = `${ele_placeholder.offsetTop}px`
    ele_video.style.left = `${ele_placeholder.offsetLeft}px`
    // ele_video.style.height = `${ele_placeholder.clientHeight}px`
    // ele_video.style.width = `${ele_placeholder.clientWidth}px`
  }


  React.useEffect(()=>{
    let ele_placeholder_main = placeholder_main_ref.current
    let ele_video_main = video_main_ref.current
    if (checkIsNotUndefined(ele_video_main))
    {
      if (checkIsNotUndefined(ele_placeholder_main))
      {
        placeIntoPosition(ele_video_main, ele_placeholder_main)
        console.log('index.js',ele_placeholder_main.clientHeight)
        console.log('index.js', ele_placeholder_main.clientWidth)

      }
    }

  },[placeholder_main_ref, video_main_ref])


  React.useEffect(()=>{
    console.log('index.js',profile)
    console.log('index.js', placeholder_main_ref)
    console.log('index.js', video_main_ref)
  })

  return (
    <>
      <AnnouncementModal show={announce_show} onClose={closeAnnounce} />
      <SettingsModal show={settings_show} onClose={closeSettings} />
      <LoginModal />

      <div className={active_style.wholeCanvas}>
        <div className={active_style.left}>
          <MainChannel test_ref={
            placeholder_main_ref
            }/>
          <BottomPreview />
          <RightPreview narrow_window={narrow_window} />
        </div>
      </div>


      <VideoChannels
        profile={current_profile}
        pass_refs={[
          video_main_ref,
        ]}
        />

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

function IndexPage() {
  let [is_loading, setIsLoading] = React.useState(false)

  let [boxA_pos, setBoxAPos] = React.useState("0")
  let [boxB_pos, setBoxBPos] = React.useState("1")
  let [boxC_pos, setBoxCPos] = React.useState("2")


  let box_pos_array = [
    [boxA_pos, setBoxAPos],
    [boxB_pos, setBoxBPos],
    [boxC_pos, setBoxCPos],
  ]

  let [test_profile, setTestProfile] = React.useState({})
  let profile_context = React.useContext(ProfileContext)
  React.useEffect(()=>{
    if (checkIsNotUndefined(profile_context)){
      let {current_profile} = profile_context
      setTestProfile(current_profile)
      setIsLoading(false)
    }else{
      console.log('index.js', 'profile_context not ready')
    }

  },[profile_context])

  return (
    <Layout>
      {is_loading ? <Loading /> : <MainCanvas profile={test_profile} />}
    </Layout>
  )
}

export default IndexPage
