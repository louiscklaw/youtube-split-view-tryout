import React from 'react'
import _ from "lodash"
import { Responsive, WidthProvider } from 'react-grid-layout'

import Loading from './loading'

import {checkIsNotUndefined, getKeys, checkContextReady, isDefined} from '../utils/mixins'

import style from '../scss/style.module.scss'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'

import YoutubeTestCell from './youtube-test-cell'

import ProfileContext from '../contexts/profile-context'

import {default_layout_settings} from '../constants/default_profile'

const ResponsiveGridLayout = WidthProvider(Responsive);

function VideoBody(props){
  let [initial_layout_load_done, setInitialLayoutLoadDone] = React.useState(false)
  let profile_context = React.useContext(ProfileContext)
  let {current_profile, checkProfileIsLoaded} = checkIsNotUndefined(profile_context)
    ? profile_context
    : { current_profile:{}, updateCurrentProfile: () => {}}


    // FIXME: fix this for not using o from outside
    let reformBySubKey = (o, key_wanted) => _.mapValues(layout_settings, (o)=>{return o[key_wanted]})


    let [layout_settings, setLayoutSettings] = React.useState(default_layout_settings)
    let [layout_breakpoints, setLayoutBreakpoints] = React.useState(reformBySubKey(default_layout_settings, 'breakpoints'))
    let [layout_seatingplan, setLayoutSeatingPlan] = React.useState(reformBySubKey(default_layout_settings, 'seating_plan'))
    let [layout_cols, setLayoutCols] = React.useState(reformBySubKey(default_layout_settings, 'cols'))

    React.useEffect(()=>{
      console.log('video_body.js','current_profile',current_profile)
      console.log('video_body.js','initial_layout_load_done',initial_layout_load_done)
      if (checkProfileIsLoaded(current_profile) && initial_layout_load_done == false){
        setLayoutSettings(current_profile.layout_settings)
        setInitialLayoutLoadDone(true)
        console.log('video_body.js', 'current_profile', current_profile)
      }
      return () => {
        console.log('video_body.js','initial_layout_load_done', 'reset')
        initial_layout_load_done = false
      }
    },[current_profile])
    React.useEffect(()=>{
      console.log('video_body.js', 'seating_plan', reformBySubKey(layout_settings, 'seating_plan').sm)
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
        <div ref={preview_ref} className="box" key={view_idx} >
          {/* {JSON.stringify(video_cell_setting)} */}
          <YoutubeTestCell vid={video_cell_setting.channel_vid}/>
        </div>
      )
    });
  }

  let preview_panel = getPreviewBox(3)
  let [test_preview_panel, setTestPreviewPanel] = React.useState(preview_panel)

  React.useEffect(()=>{
    if (checkIsNotUndefined(current_profile)){
      if (getKeys(current_profile).length>0){
        let {channel_setting} = current_profile
        _.mapKeys(channel_setting, (v,k)=>{
          let [video_cell_setting, setVideoCellSetting] = video_cell_settings[k]
          setVideoCellSetting({
            ...video_cell_setting,
            channel_vid: v.channel_vid
          })
        })
      }
    }

  },[current_profile])

  React.useEffect(()=>{
    setTestPreviewPanel(preview_panel)
  }, video_cell_settings.map(x => x[0]))

  const showRightSidePreview = () => {
    _.range(6,16).map(idx => {
      let preview_ref = preview_and_video_refs[idx][0]
      if (isDefined(preview_ref.current)){
        preview_ref.current.classList.remove('hide-box')
      }
    })
  }

  const hideRightSidePreview = () => {
    _.range(6,16).map(idx => {
      let preview_ref = preview_and_video_refs[idx][0]
      if (isDefined(preview_ref.current)){
        preview_ref.current.classList.add('hide-box')
      }
    })
  }

  const setToProfile1 = () => {
    if (checkContextReady(profile_context)){
      let {saveToFirebase, packLayoutToProfile, updateCurrentProfile} = profile_context
      let profile_in = packLayoutToProfile(current_profile, 'lg', {layout: '1'})
      let profile_in_end = packLayoutToProfile(profile_in, 'sm', {layout: '1'})
      console.log('video_body.js',profile_in_end)
      saveToFirebase( profile_in_end )
      updateCurrentProfile(profile_in_end)

    }
  }

  const setToProfile2 = () => {
    if (checkContextReady(profile_context)){
      let {saveToFirebase, packLayoutToProfile, updateCurrentProfile} = profile_context
      let profile_in = packLayoutToProfile(current_profile, 'lg', {layout: '2'})
      let profile_in_end = packLayoutToProfile(profile_in, 'sm', {layout: '2'})
      console.log('video_body.js',profile_in_end)
      saveToFirebase( profile_in_end )
      updateCurrentProfile(profile_in_end)

    }
  }

  // grid-layout handlers start
  const onLayoutChange = (layout, layouts) => {

    if (checkContextReady(profile_context)){
      if (getKeys(current_profile).length > 0){
        if (checkContextReady(profile_context)){{
          let {saveToFirebase, packLayoutToProfile} = profile_context

          let profile_in = packLayoutToProfile(current_profile, current_breakpoint_name, layout)

          saveToFirebase( profile_in )


          console.log('video_body.js','saving to profile')
        }}
      }
    }
  }


  let [current_breakpoint_name, setCurrentBreakpointName] = React.useState('sm')
  const onBreakpointChange = (breakpoint_name, num_cols) => {
    // get triggered when breakpoint change
    // regenerate the required children

    setCurrentBreakpointName(breakpoint_name)
    if (breakpoint_name == 'sm'){
      hideRightSidePreview()
    }else{
      showRightSidePreview()
    }
  }
  const onWidthChange = () => {}
  // grid-layout handlers end

  let [debug_text, setDebugText] = React.useState()
  React.useEffect(()=>{
    setDebugText(JSON.stringify(layout_seatingplan, null , 1))
  })

  return (
    <>
      <button onClick={setToProfile1}>profile1</button>
      <button onClick={setToProfile2}>profile2</button>


      <ResponsiveGridLayout
        className="layout"
        breakpoints={layout_breakpoints}
        layouts={layout_seatingplan}
        cols={{lg: 5, sm: 2}}

        onBreakpointChange={onBreakpointChange}
        onLayoutChange={onLayoutChange}
        onWidthChange={onWidthChange}

        rowHeight={190}

        margin={[0,0]}
        containerPadding={[0,0]}

        style={{
          height: '70vh'
        }}

        >

        { test_preview_panel }

      </ResponsiveGridLayout>
{/*
      <pre>
        { debug_text }
      </pre>
      */}

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