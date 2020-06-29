import React from 'react'
import _ from "lodash"
import { Responsive, WidthProvider } from 'react-grid-layout'

import style from '../scss/style.module.scss'

import Loading from './loading'

import {checkIsNotUndefined, getKeys, checkContextReady, isDefined} from '../utils/mixins'

import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'

import YoutubeTestCell from './youtube-test-cell'

import ProfileContext from '../contexts/profile-context'
import ThemeContext from '../contexts/theme-context'

import {default_layout_settings} from '../constants/default_profile'

const ResponsiveGridLayout = WidthProvider(Responsive);

function VideoBody(props){
  let profile_context = React.useContext(ProfileContext)
  let {current_profile, checkProfileIsLoaded} = checkIsNotUndefined(profile_context)
  ? profile_context
  : { current_profile:{}, updateCurrentProfile: () => {}}

  let theme_context = React.useContext(ThemeContext)
  let active_style = checkIsNotUndefined(theme_context)
  ? theme_context.active_style
  : style

  let reformBySubKey = (o, key_wanted) =>  _.mapValues(o, key_wanted)

  let [layout_settings, setLayoutSettings] = React.useState(default_layout_settings)
  let [layout_breakpoints, setLayoutBreakpoints] = React.useState(reformBySubKey(default_layout_settings, 'breakpoints'))
  let [layout_seatingplan, setLayoutSeatingPlan] = React.useState(reformBySubKey(default_layout_settings, 'seating_plan'))
  let [layout_cols, setLayoutCols] = React.useState(reformBySubKey(default_layout_settings, 'cols'))

  React.useEffect(()=>{
    if (checkProfileIsLoaded(current_profile)){
      setLayoutSettings(current_profile.layout_settings)
      console.log('video_body.js', 'current_profile', current_profile)
    }
  },[current_profile])

  React.useEffect(()=>{
    console.log('video_body.js', 'layout_settings.sm', layout_settings.sm)
    setLayoutSeatingPlan(reformBySubKey(layout_settings, 'seating_plan'))
    setLayoutBreakpoints(reformBySubKey(layout_settings, 'breakpoints'))
    setLayoutCols(reformBySubKey(layout_settings, 'cols'))
  },[layout_settings])

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

  let init_video_cell_setting = {
    channel_title: '',
    channel_type: '',
    channel_vid: ''
  }

  let video_cell_settings = [
    React.useState(init_video_cell_setting),
    React.useState(init_video_cell_setting),
    React.useState(init_video_cell_setting),
    React.useState(init_video_cell_setting),
    React.useState(init_video_cell_setting),
    React.useState(init_video_cell_setting),
    React.useState(init_video_cell_setting),
    React.useState(init_video_cell_setting),
    React.useState(init_video_cell_setting),
    React.useState(init_video_cell_setting),
    React.useState(init_video_cell_setting),
    React.useState(init_video_cell_setting),
    React.useState(init_video_cell_setting),
    React.useState(init_video_cell_setting),
    React.useState(init_video_cell_setting),
    React.useState(init_video_cell_setting),
    React.useState(init_video_cell_setting)
  ]

  const getPreviewBox = (number_of_box) => {
    return new Array(number_of_box).fill(undefined).map((val, idx) => {
      let view_idx = `view_${idx}`
      let preview_ref = preview_and_video_refs[idx][0]
      let [video_cell_setting, setVideoCellSetting] = video_cell_settings[idx]

      return (
        <div ref={preview_ref} className={active_style.videoContainer} key={view_idx} >
          <YoutubeTestCell
            vid={video_cell_setting.channel_vid}
            channel_title={video_cell_setting.channel_title}
            />
        </div>
      )
    });
  }

  let preview_panel = getPreviewBox(17)
  let [test_preview_panel, setTestPreviewPanel] = React.useState(preview_panel)

  React.useEffect(()=>{
    if (checkIsNotUndefined(current_profile)){
      if (getKeys(current_profile).length>0){
        let {channel_setting} = current_profile
        _.mapKeys(channel_setting, (v,k)=>{
          let [video_cell_setting, setVideoCellSetting] = video_cell_settings[k]
          setVideoCellSetting({
            ...video_cell_setting,
            channel_vid: v.channel_vid,
            channel_title: v.channel_title
          })
        })
      }
    }
  },[current_profile])

  React.useEffect(()=>{
    setTestPreviewPanel(preview_panel)
  }, video_cell_settings.map(x => x[0]))

  const showRightSidePreview = () => {
    console.log('video_body.js','showRightSidePreview')
    console.log('video_body.js','showRightSidePreview',_.range(6,16))
    _.range(6,16+1).map(idx => {
      let preview_ref = preview_and_video_refs[idx][0]
      if (isDefined(preview_ref.current)){
        preview_ref.current.classList.remove('hide-box')
      }
    })
  }

  const hideRightSidePreview = () => {
    console.log('video_body.js','hideRightSidePreview')
    _.range(6,16+1).map(idx => {
      let preview_ref = preview_and_video_refs[idx][0]
      if (isDefined(preview_ref.current)){
        preview_ref.current.classList.add('hide-box')
      }
    })
  }

  // grid-layout handlers start
  const onLayoutChange = (layout, layouts) => {
    console.log('video_body.js','current_profile',current_profile)
    console.log('video_body.js','current_profile.layout_settings',current_profile.layout_settings)
    let current_layout_settings = current_profile.layout_settings

    // update when defined only
    if (isDefined(current_layout_settings)){
      let {saveToFirebase} = profile_context
      let {breakpoints, cols} = current_layout_settings[current_breakpoint_name]

      // update layout settings
      current_layout_settings[current_breakpoint_name] = {
        breakpoints, cols,
        seating_plan: layout
      }
      console.log('video_body.js','current_profile',current_profile)
      saveToFirebase(current_profile)
    }
  }

  let [current_breakpoint_name, setCurrentBreakpointName] = React.useState('sm')
  const onBreakpointChange = (breakpoint_name, num_cols) => {
    // get triggered when breakpoint change
    // regenerate the required children
    setCurrentBreakpointName(breakpoint_name)
    console.log('video_body.js','breakpoint_name',breakpoint_name)
    switch (breakpoint_name) {
      case "sm":
        hideRightSidePreview()
        break;
      case "lg":
        showRightSidePreview()
        break;
      default:
        hideRightSidePreview()
        break;
    }

  }

  let [debug_text, setDebugText] = React.useState()
  React.useEffect(()=>{
    setDebugText(JSON.stringify(layout_seatingplan))
  })

  return(
    <>
      <ResponsiveGridLayout

        className={ `layout ` + active_style.test + ' ' + active_style.videoBodyHeight }
        breakpoints={layout_breakpoints}
        layouts={layout_seatingplan}
        cols={layout_cols}

        onBreakpointChange={onBreakpointChange}
        onLayoutChange={onLayoutChange}

        rowHeight={190}

        margin={[0,0]}
        containerPadding={[0,0]}

        >
        { test_preview_panel }
      </ResponsiveGridLayout>
    </>
  )
}

function VideoBodyLoading(props){
  return(
    <>
      Loading
    </>
  )
}

function VideoBodyIndex(props){
  let [is_loading, setIsLoading] = React.useState(false)
  let [test_profile, setTestProfile] = React.useState({})
  let [debug_text, setDebugText] = React.useState()

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

  return(
    <>
      {is_loading ? <VideoBodyLoading /> : <VideoBody profile={test_profile} />}
    </>
  )
}

export default VideoBodyIndex
