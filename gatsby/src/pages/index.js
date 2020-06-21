import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import AnnouncementModal from "../components/modals/announcement-modal"
import Footer from "../components/footer"
import MainChannel from "../components/main-channel"
import SettingsModal from "../components/modals/settings-modal"

import BottomPreview from "../components/BottomPreview"
import RightPreview from "../components/RightPreview"
import VideoChannels from "../components/video-channels"

import GlobalContext from "../contexts/global-context"
import FirebaseMixinsContext from "../contexts/firebase-mixins"
import LoginModal from "../components/modals/login-modal"

const trueIfUndefinedOrNull = obj_in => {
  return typeof obj_in == "undefined" || obj_in == null
}

function Loading() {
  return <>loading</>
}

function MainCanvas(props) {
  let global_context = React.useContext(GlobalContext)
  let { active_style, narrow_window } = global_context
  let { box_settings } = props

  return (
    <>
      <LoginModal active_style={active_style} />
      <SettingsModal active_style={active_style} />
      <AnnouncementModal active_style={active_style} />
      <div className={active_style.wholeCanvas}>
        <div className={active_style.left}>
          <MainChannel />
          <BottomPreview active_style={active_style} />
          <RightPreview
            active_style={active_style}
            narrow_window={narrow_window}
          />
        </div>
      </div>
      <Footer active_style={active_style} />
      <VideoChannels box_settings={box_settings} active_style={active_style} />
    </>
  )
}

function IndexPage() {
  let global_context = React.useContext(GlobalContext)
  let firebase_mixins = React.useContext(FirebaseMixinsContext)

  let [is_loading, setIsLoading] = React.useState(true)

  let [main_canvas, setMainCanvas] = React.useState("")
  let [boxA_pos, setBoxAPos] = React.useState("0")
  let [boxB_pos, setBoxBPos] = React.useState("1")
  let [boxC_pos, setBoxCPos] = React.useState("2")
  let [box_settings, setBoxSettings] = React.useState([])

  let box_pos_array = [
    [boxA_pos, setBoxAPos],
    [boxB_pos, setBoxBPos],
    [boxC_pos, setBoxCPos],
  ]

  React.useEffect(() => {
    // prepare video placdholder and boxes
    if (trueIfUndefinedOrNull(global_context.active_style)) {
    } else {
      if (Object.keys(global_context).indexOf("active_style") > -1) {
        setIsLoading(false)
        console.log("findme", "loading done")
      } else {
        console.log("findme", "is loading")
      }
    }
  }, [global_context])

  return (
    <Layout>
      <SEO title="Home" />
      {is_loading ? <Loading /> : <MainCanvas box_settings={box_settings} />}
    </Layout>
  )
}

export default IndexPage
