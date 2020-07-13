import React from 'react'
import _ from "lodash"

import { Responsive, WidthProvider } from 'react-grid-layout'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'

import {default_profile} from '~constants/default_profile'
import ThemeContext from '~contexts/theme-context'
import ProfileContext from '~contexts/profile-context'

import {checkIsNotUndefined, getKeys, checkContextReady, isDefined} from '~mixins/general'

import {default_layout_settings} from '~constants/default_profile'

import YoutubeTestCell from '~components/youtube-test-cell'


const ResponsiveGridLayout = WidthProvider(Responsive)

function MainCanvas(props){
  let {active_style} = React.useContext(ThemeContext)
  let {current_profile, checkProfileIsLoaded, saveLayoutToFirebase} = React.useContext(ProfileContext)

  // let [layout_settings, setLayoutSettings] = React.useState()
  let [breakpoints, setBreakpoints] = React.useState(current_profile.breakpoints)
  let [layouts, setLayouts] = React.useState(current_profile.layouts)
  let [cols, setCols] = React.useState(current_profile.cols)

  React.useEffect(()=>{
    if (isDefined(current_profile.layouts)){
      setLayouts(current_profile.layouts)
      setCols(current_profile.cols)
      setBreakpoints(current_profile.breakpoints)
    }
  },[current_profile])

  // React.useEffect(()=>{
  //   setLayoutSeatingPlan(default_profile.layouts)
  //   setLayoutBreakpoints({lg: 600, sm: 0})
  //   setLayoutCols({lg: 5, sm: 2})
  // },[layout_settings])

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

      // return (
      //   <div ref={preview_ref} className={active_style.videoContainer} key={view_idx}>
      //     {JSON.stringify(video_cell_setting)}
      //   </div>
      // )

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

  let preview_panel = getPreviewBox(3)
  // let preview_panel = getPreviewBox(17)

  let [test_preview_panel, setTestPreviewPanel] = React.useState(preview_panel)

  React.useEffect(()=>{
    if (checkIsNotUndefined(current_profile)){
      if (getKeys(current_profile).length>0){
        let {channel_setting} = current_profile

        // FIXME: update of the config json
        // _.mapKeys(channel_setting, (v,k)=>{
        //   let [video_cell_setting, setVideoCellSetting] = video_cell_settings[k]
        //   setVideoCellSetting({
        //     ...video_cell_setting,
        //     channel_vid: v.channel_vid,
        //     channel_title: v.channel_title
        //   })
        // })

      }
    }
  },[current_profile])

  React.useEffect(()=>{
    setTestPreviewPanel(preview_panel)
  }, video_cell_settings.map(x => x[0]))

  const showRightSidePreview = () => {
    console.log('main-canvas.js','video_body.js','showRightSidePreview')
    console.log('main-canvas.js','video_body.js','showRightSidePreview',_.range(6,16))
    _.range(6,16+1).map(idx => {
      let preview_ref = preview_and_video_refs[idx][0]
      if (isDefined(preview_ref.current)){
        preview_ref.current.classList.remove('hide-box')
      }
    })
  }

  const hideRightSidePreview = () => {
    console.log('main-canvas.js','video_body.js','hideRightSidePreview')
    _.range(6,16+1).map(idx => {
      let preview_ref = preview_and_video_refs[idx][0]
      if (isDefined(preview_ref.current)){
        preview_ref.current.classList.add('hide-box')
      }
    })
  }

  const getObjValueOnly = (obj_in) => JSON.parse(JSON.stringify(obj_in))

  let [last_save_snapshot, setLastSaveSnapshot] = React.useState({})
  const saveLayoutChangeWithCoolDown = (layout) => {
    console.log('main-canvas.js','profile-context.js','saving layout change with cool down')
    if (_.isEqual(layout, last_save_snapshot)){
      console.log('main-canvas.js','layout is same, skip save')
    }else{
      console.log('main-canvas.js','found layout diff, perform save')
      saveLayoutToFirebase( layout )

      // copy obj
      setLastSaveSnapshot(layout)
    }
  }

  let [page_load_done, setPageLoadDone] = React.useState(false)
  let [save_blocker, setSaveBlocker] = React.useState({})
  React.useEffect(()=>{
    setSaveBlocker(setTimeout(() => {
      setPageLoadDone(true)
      console.log('main-canvas.js','setting page load done to true')
    }, 5000))

    return clearTimeout(save_blocker)
  },[])

  const onLayoutChange = ( layout, layouts ) => {
    // console.log(current_breakpoint_name)

    // it get called when first enter the page
    // TODO: resume me
    if (page_load_done){
      saveLayoutChangeWithCoolDown(layout)
    }

  }

  let [current_breakpoint_name, setCurrentBreakpointName] = React.useState('sm')
  const onBreakpointChange = (breakpoint_name, num_cols) => {
    // get triggered when breakpoint change
    // regenerate the required children
    setCurrentBreakpointName(breakpoint_name)
    console.log('main-canvas.js','video_body.js','breakpoint_name',breakpoint_name)
　
    switch (breakpoint_name) {
      case "xxs":
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

  return(
    <>
      {/* {JSON.stringify(current_profile)} */}
      <ResponsiveGridLayout
        className={ `layout ` + active_style.test + ' ' + active_style.videoBodyHeight }

        breakpoints={breakpoints}
        layouts={layouts}
        cols={cols}

        onBreakpointChange={onBreakpointChange}
        onLayoutChange={onLayoutChange}

        // rowHeight={190}

        // margin={[0,0]}
        // containerPadding={[0,0]}

        >
        { test_preview_panel }
      </ResponsiveGridLayout>
    </>
  )
}

export default MainCanvas