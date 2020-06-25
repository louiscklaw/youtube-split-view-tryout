import React from 'react'
import _ from "lodash"
import { Responsive, WidthProvider } from 'react-grid-layout'

import Loading from './loading'

import {checkIsNotUndefined, getKeys, checkContextReady} from '../utils/mixins'

import style from '../scss/style.module.scss'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'

import YoutubeTestCell from './youtube-test-cell'

import ProfileContext from '../contexts/profile-context'

const ResponsiveGridLayout = WidthProvider(Responsive);

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

let reformBySubKey = (o, key_wanted) => _.mapValues(layout_settings, (o)=>{return o[key_wanted]})

let layout_breakpoints = reformBySubKey(layout_settings, 'breakpoints')

let layout_seatingplan = reformBySubKey(layout_settings, 'seating_plan')
let layout_cols = reformBySubKey(layout_settings, 'cols')

function VideoBody(props){


  let profile_context = React.useContext(ProfileContext)
  let {current_profile, updateCurrentProfile, unpackProfile} = checkIsNotUndefined(profile_context)
    ? profile_context
    : { current_profile:{}, updateCurrentProfile: () => {}}

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
          <YoutubeTestCell vid={video_cell_setting.channel_vid}/>
        </div>
      )
    });
  }
  let preview_panel = getPreviewBox(16)
  let [test_preview_panel, setTestPreviewPanel] = React.useState(preview_panel)

  React.useEffect(()=>{
    if (checkIsNotUndefined(current_profile)){
      if (getKeys(current_profile).length>0)
      {
        let channel_setting = unpackProfile(current_profile, 'channel_setting')
        console.log('findme', channel_setting)
        // _.mapKeys(channel_setting, (v,k)=>{
        //   let [video_cell_setting, setVideoCellSetting] = video_cell_settings[k]
        //   setVideoCellSetting({
        //     ...video_cell_setting,
        //     channel_vid: v.channel_vid
        //   })
        // })
      }
    }
  },[current_profile])
  React.useEffect(()=>{
    setTestPreviewPanel(preview_panel)
  }, video_cell_settings.map(x => x[0]))

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

  // grid-layout handlers start
  const onLayoutChange = (layout, layouts) => {
    if (checkContextReady(profile_context)){
      let {updateCurrentProfileAndSaveToFirebase, packProfile} = profile_context

      console.log('video_body.js','layout', layout)

      if (getKeys(current_profile).length > 0){
        testOnClick1(current_profile, layout)
      }
    }
  }

  const onBreakpointChange = (breakpoint_name, num_cols) => {
    // get triggered when breakpoint change
    // regenerate the required children

    if (breakpoint_name == 'sm'){
      hideRightSidePreview()
    }else{
      showRightSidePreview()
    }
  }
  const onWidthChange = () => {}
  // grid-layout handlers end

  const testOnClick1 = (profile_in, layout) =>{
    if (checkContextReady(profile_context)){{
      let {updateCurrentProfileAndSaveToFirebase, packProfile} = profile_context

      updateCurrentProfileAndSaveToFirebase(
        packProfile(profile_in,'layout', layout)
      )
    }
  }

  }
  return(
    <>

      <ResponsiveGridLayout
        className="layout"
        breakpoints={layout_breakpoints}
        layouts={layout_seatingplan}
        cols={layout_cols}

        onBreakpointChange={onBreakpointChange}
        onLayoutChange={onLayoutChange}
        onWidthChange={onWidthChange}

        rowHeight={190}

        margin={[0,0]}
        containerPadding={[0,0]}

        style={{
          height: '90vh'
        }}

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