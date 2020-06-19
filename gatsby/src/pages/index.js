import React from "react"
import _ from 'lodash'

import Layout from "../components/layout"
import SEO from "../components/seo"

import AnnouncementModal from '../components/modals/announcement-modal'
import Footer from '../components/footer'
import MainChannel from "../components/main-channel"
import PreviewChannel from '../components/preview-channel'
import SettingsModal from '../components/modals/settings-modal'
import YoutubeCell from '../components/youtube-cell'

import BottomPreview from '../components/BottomPreview'
import RightPreview from '../components/RightPreview'
import VideoChannels from '../components/video-channels'


import GlobalContext from "../contexts/global-context"
import FirebaseMixinsContext from '../contexts/firebase-mixins'
import { resetWarningCache } from "prop-types"
import LoginModal from "../components/modals/login-modal"

const trueIfUndefinedOrNull = (obj_in) => {
  return (typeof(obj_in) == 'undefined' || obj_in==null)
}

function IndexPage() {
  const announce_ref = React.useRef(null)
  const settings_ref = React.useRef(null)
  let global_context = React.useContext(GlobalContext)
  let firebase_mixins = React.useContext(FirebaseMixinsContext)
  let [main_canvas, setMainCanvas] = React.useState('')

  let [boxA_pos, setBoxAPos] = React.useState('0')
  let [boxB_pos, setBoxBPos] = React.useState('1')
  let [boxC_pos, setBoxCPos] = React.useState('2')

  let box_pos_array = [
    [boxA_pos, setBoxAPos],
    [boxB_pos, setBoxBPos],
    [boxC_pos, setBoxCPos]
  ]

  let i = 0
  let box_settings = {}

  let channel_list = {
    0:{
      v_id: '2GBPLmm0-kQ',
      video_title: 'title 0'
    },
    1:{
      v_id: '2GBPLmm0-kQ',
      video_title: 'title 1'
    }
  }

  React.useEffect(()=>{
    Object.keys(channel_list).forEach(channel =>{
      let channel_info = channel_list[channel]
      box_settings[channel] = {
        box_pos: box_pos_array[channel][0],
        v_id: channel_info.v_id,
        video_title: channel_info.video_title
      }
    })
  },[channel_list])

  React.useEffect(()=>{
    // update if the box ordering changed

  }, [])

  React.useEffect(()=>{

    const getBoxById = (position) => {
      console.log('getBoxById calling, ', position)
      return document.querySelector(`div[data-position="${position}"]`)
    }

    const getPlaceholderById = (placeholder) => {
      console.log('getPlaceholderById calling, ', placeholder)
      return document.querySelector(`div[data-placeholder="${placeholder}"]`)
    }

    const placeIntoPosition = (ele_video) => {
      console.log('placeinto position', ele_video)
      let position_of_ele_video = ele_video.getAttribute('data-position')
      let ele_placeholder = getPlaceholderById(position_of_ele_video)

      ele_video.style.position = "fixed"
      ele_video.style.top = `${ele_placeholder.offsetTop}px`
      ele_video.style.left = `${ele_placeholder.offsetLeft}px`
      ele_video.style.height = `${ele_placeholder.clientHeight}px`
      ele_video.style.width = `${ele_placeholder.clientWidth}px`
    }

    if(trueIfUndefinedOrNull(global_context)){

    }else{
      let {checkDataReady} = global_context
      Object.keys(box_settings).forEach( channel_id => {
        let box_setting = box_settings[channel_id]
        let {box_pos} = box_setting
        let ele_box = getBoxById(box_pos)

        if (checkDataReady(ele_box)){
          placeIntoPosition(ele_box)
        }else{
          console.log('ele_box is empty')
        }
      })
    }
  })

  React.useEffect(()=>{
    // prepare video placdholder and boxes
    if (trueIfUndefinedOrNull(global_context.active_style)){
      console.log('global_context', global_context)
    }else{
      let {active_style, narrow_window} = global_context

      setMainCanvas((
        <>
          <LoginModal active_style={active_style} />

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

          <Footer />

          <VideoChannels
            box_settings={box_settings}
            active_style={active_style}
          />

        </>
      ))
    }

  }, [global_context])



  React.useEffect(()=>{
    console.log('firebase_mixins', firebase_mixins)

  },[firebase_mixins])


  return(
    <Layout>
      <SEO title="Home" />
      {main_canvas}
    </Layout>
  )
}

export default IndexPage
