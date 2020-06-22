import React from "react"
import _ from "lodash"

import style from '../scss/style.module.scss'
import ThemeContext from '../contexts/theme-context'
import {checkIsNotUndefined} from '../utils/mixins'


import Layout from "../components/layout"
import Footer from "../components/footer"

import {firebaseLogout} from '../utils/firebase'
import { HelloworldPage } from "../utils/pages"

import LoginModal from '../components/modals/login-modal'
import AnnouncementModal from "../components/modals/announcement-modal"
import SettingsModal from '../components/modals/settings-modal'
import LogoutButton from '../components/buttons/logout-button'

import MainChannel from '../components/main-channel'
import BottomPreview from '../components/BottomPreview'
import RightPreview from '../components/RightPreview'



function Loading(props){
  return(
    <>
      loading
    </>
  )
}

function MainCanvas(props){
  let theme_context = React.useContext(ThemeContext)
  let active_style = checkIsNotUndefined(theme_context)? theme_context.active_style : style

  let [announce_show, setAnnouncementShow] = React.useState(true)
  let [settings_show, setSettingsShow] = React.useState(false)

  // handle announcement modal
  const showAnnounce = (e) => {setAnnouncementShow(true)}
  const closeAnnounce = (e) => { setAnnouncementShow(false) }

  // handle settings modal
  const showSettings = (e) => {setAnnouncementShow(true)}
  const closeSettings = (e) => {setSettingsShow(false)}

  return(
    <>

      <AnnouncementModal show={announce_show} onClose={closeAnnounce}/>
      <SettingsModal show={settings_show} onClose={closeSettings}/>
      <LoginModal />

      <div className={active_style.wholeCanvas}>
        <div className={active_style.left}>
          <MainChannel />
          <BottomPreview />
          {/* <RightPreview narrow_window={narrow_window} /> */}
        </div>
      </div>

      <Footer >
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
  let [box_settings, setBoxSettings] = React.useState([])

  let box_pos_array = [
    [boxA_pos, setBoxAPos],
    [boxB_pos, setBoxBPos],
    [boxC_pos, setBoxCPos],
  ]


  return (
    <Layout>
      {is_loading ? <Loading /> : <MainCanvas box_settings={box_settings} />}
    </Layout>
  )
}

export default IndexPage
