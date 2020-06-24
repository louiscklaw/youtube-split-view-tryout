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

// react-grid-layout import start
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'

import YoutubeTestCell from '../components/youtube-test-cell'
import "./my-responsive-grid.css"

import { Responsive, WidthProvider } from 'react-grid-layout'
const ResponsiveGridLayout = WidthProvider(Responsive);
// raect-grid-layout import end

let reformBySubKey = (o, key_wanted) => _.mapValues(layout_settings, (o)=>{return o[key_wanted]})

let layout_settings = {
  lg: {
    breakpoints: 1200,
    seating_plan: [
      {i: 'view_0',  x: 0, y: 0, w: 3, h: 3},
      {i: 'view_1',  x: 0, y: 3, w: 1, h: 1},
      {i: 'view_2',  x: 1, y: 3, w: 1, h: 1},
      {i: 'view_3',  x: 2, y: 3, w: 1, h: 1},
      {i: 'view_4',  x: 0, y: 4, w: 1, h: 1},
      {i: 'view_5',  x: 1, y: 4, w: 1, h: 1},

      {i: 'view_6',  x: 2, y: 4, w: 1, h: 1},

      {i: 'view_7',  x: 3, y: 0, w: 1, h: 1},
      {i: 'view_8',  x: 4, y: 0, w: 1, h: 1},
      {i: 'view_9',  x: 3, y: 1, w: 1, h: 1},
      {i: 'view_10', x: 4, y: 1, w: 1, h: 1},
      {i: 'view_11', x: 3, y: 2, w: 1, h: 1},
      {i: 'view_12', x: 4, y: 2, w: 1, h: 1},
      {i: 'view_13', x: 3, y: 3, w: 1, h: 1},
      {i: 'view_14', x: 4, y: 3, w: 1, h: 1},
      {i: 'view_15', x: 3, y: 4, w: 1, h: 1},
      {i: 'view_16', x: 4, y: 4, w: 1, h: 1}
    ],
    cols: 5
  },
  sm:{
    breakpoints: 600,
    seating_plan: [
      {i: 'view_0', x: 0, y: 0, w: 2, h: 2},
      {i: 'view_1', x: 0, y: 2, w: 1, h: 1},
      {i: 'view_2', x: 1, y: 2, w: 1, h: 1},
      {i: 'view_3', x: 0, y: 3, w: 1, h: 1},
      {i: 'view_4', x: 1, y: 3, w: 1, h: 1},
      {i: 'view_5', x: 0, y: 4, w: 1, h: 1},
      {i: 'view_6', x: 1, y: 4, w: 1, h: 1}
    ],
    cols: 2
  }
}

let layout_breakpoints = reformBySubKey(layout_settings, 'breakpoints')
// lookup layout name by width
let reverse_layout_breakpoints = _.invert(layout_breakpoints)
let widths_from_max_to_min = Object.keys(reverse_layout_breakpoints).reverse()

let layout_seatingplan = reformBySubKey(layout_settings, 'seating_plan')
let layout_cols = reformBySubKey(layout_settings, 'cols')

console.log('test-layout.js','layout_breakpoints',layout_breakpoints)
console.log('test-layout.js','layout_seatingplan',layout_seatingplan)

let getNameByWidth = (width) => reverse_layout_breakpoints[width]
let min_width_layout_name = _.last(widths_from_max_to_min)
let default_layout_name = min_width_layout_name


function Loading(props) {
  return <>loading</>
}

function MainCanvas(props) {
  let {profile} = props


  // react-grid-layout code start
  let [debug_text, setDebugText] = React.useState()
  let [current_layout_name, setCurrentLayoutName] = React.useState('')

  // 0 => preview refs, 1 => video_ref
  let preview_and_video_refs = [
    [React.useRef(),React.useRef()],
    [React.useRef(),React.useRef()],
    [React.useRef(),React.useRef()],
    [React.useRef(),React.useRef()],
    [React.useRef(),React.useRef()],
    [React.useRef(),React.useRef()],
    [React.useRef(),React.useRef()],
    [React.useRef(),React.useRef()],
    [React.useRef(),React.useRef()],
    [React.useRef(),React.useRef()],
    [React.useRef(),React.useRef()],
    [React.useRef(),React.useRef()],
    [React.useRef(),React.useRef()],
    [React.useRef(),React.useRef()],
    [React.useRef(),React.useRef()],
    [React.useRef(),React.useRef()],
    [React.useRef(),React.useRef()]
  ]

  let video_vids = [
    React.useState('testing_vid'),
    React.useState('testing_vid'),
    React.useState('testing_vid'),
    React.useState('testing_vid'),
    React.useState('testing_vid'),
    React.useState('testing_vid'),
    React.useState('testing_vid'),
    React.useState('testing_vid'),
    React.useState('testing_vid'),
    React.useState('testing_vid'),
    React.useState('testing_vid'),
    React.useState('testing_vid'),
    React.useState('testing_vid'),
    React.useState('testing_vid'),
    React.useState('testing_vid'),
    React.useState('testing_vid'),
    React.useState('testing_vid')
  ]

  const getPreviewBox = (number_of_box) => {
    return new Array(number_of_box).fill(undefined).map((val, idx) => {
      let view_idx = `view_${idx+1}`
      let preview_ref = preview_and_video_refs[idx][0]
      let video_ref = preview_and_video_refs[idx][1]
      let video_vid_value = video_vids[idx][0]

      return (
        // preview_refs
        <div ref={preview_ref} className="box" key={view_idx} >
          {view_idx}
          <div ref={video_ref} vid={video_vid_value}>
            {video_vid_value}
          </div>
        </div>
      )
    });
  }


  let [num_of_preview, setNumOfPreview] = React.useState(16)
  const preview_panel = React.useMemo(()=> getPreviewBox(num_of_preview),[num_of_preview])

  const preview_panel_lg = getPreviewBox(16)
  const preview_panel_sm = getPreviewBox(6)
  let [test_preview_panel, setTestPreviewPanel] = React.useState(preview_panel_lg)

  let checkLayoutNames = (screen_width) => {
    let layout_name =  widths_from_max_to_min.filter( width => screen_width > width )

    // return smallest layout name if no match
    return getNameByWidth(layout_name.length > 0 ? layout_name[0]: default_layout_name)
  }

  const updateLayoutName = () => {
    // setDebugText(checkLayoutNames(document.body.clientWidth))
    setCurrentLayoutName(checkLayoutNames(document.body.clientWidth))
  }

  const onLayoutChange = (layout, layouts) => {
    console.log('test-layout.js','layout',layout)
    console.log('test-layout.js','layouts',layouts)
    // setPreviewPanel(getPreviewBox(preview_panel_count_lg))
  }


  const showRightSidePreview = () => {
    _.range(6,16).map(idx => {
      let preview_ref = preview_and_video_refs[idx][0]
      preview_ref.current.classList.remove('hide-box')
    })
  }

  const hideRightSidePreview = () => {
    _.range(6,16).map(idx => {
      let preview_ref = preview_and_video_refs[idx][0]
      preview_ref.current.classList.add('hide-box')
    })
  }

  const [render_test, setRenderTest] = React.useState(1)
  const onBreakpointChange = (breakpoint_name, num_cols) => {
    // get triggered when breakpoint change
    // regenerate the required children
    // setPreviewPanel(preview_panel_lg)
    // layout_seatingplan[]
    // console.log('test-layout.js', breakpoint_name)
    // console.log(breakpoint_name)

    // let num_of_preview_cell = layout_seatingplan[breakpoint_name].length
    // setNumOfPreview(num_of_preview_cell)
    // setRenderTest(1)
    if (breakpoint_name == 'sm'){
      setTestPreviewPanel(preview_panel_lg)
      hideRightSidePreview()
    }else{
      setTestPreviewPanel(preview_panel_lg)
      showRightSidePreview()
    }
  }
  const onWidthChange = () => {}


  // react-grid-layout code end

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


  React.useEffect(()=>{
    let setFuncVideoVid = video_vids[1][1]

    if (checkIsNotUndefined(current_profile)){
      // setFuncVideoVid(current_profile.0.channel_vid)
      setFuncVideoVid(`current_profile[0].channel_vid`)

      console.log('findme',Object.keys(current_profile).length)
      if (Object.keys(current_profile).length>0)
      {
        console.log('findme',current_profile[0].channel_vid)
        setFuncVideoVid(current_profile[0].channel_vid)
      }
    }
  })



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

      <ResponsiveGridLayout
        className="layout"
        breakpoints={layout_breakpoints}
        layouts={layout_seatingplan}
        cols={layout_cols}

        onBreakpointChange={onBreakpointChange}
        onLayoutChange={onLayoutChange}
        onWidthChange={onWidthChange}

        render={render_test}


        rowHeight={190}

        margin={[0,0]}
        containerPadding={[0,0]}

        style={{
          height: '90vh'
        }}

        >

        <div key="view_0" className="boxa" data-key="view_0">
          <YoutubeTestCell />
        </div>

        { test_preview_panel }

      </ResponsiveGridLayout>

      {/*
        <VideoChannels
        profile={current_profile}
        pass_refs={[
          video_main_ref,
        ]}
        />
        */}

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
