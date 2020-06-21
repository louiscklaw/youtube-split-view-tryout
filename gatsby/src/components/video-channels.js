import React from 'react'
import GlobalContext from '../contexts/global-context'
import VideoContainer from './video-container'

function Loading(){
  return(
    <>
      loading
    </>
  )
}

function MainCanvas(props){
  let {box_settings,active_style, update_pos} = props
  let [video_containers, setVideoContainers] = React.useState()

  React.useEffect(()=>{
    setVideoContainers(Object.keys(box_settings).map(idx => {
      return(
        <VideoContainer active_style={active_style} box_pos={idx}  box_setting={box_settings[idx]} />
      )
    }))
  }, [box_settings])

  React.useEffect(()=>{

  },[video_containers])

  return(
    <>
      { box_settings }
      { video_containers }
    </>
  )
}

function VideoChannels(props){
  let [is_loading, setIsLoading] = React.useState(true)
  let {box_settings, active_style} = props
  let global_context = React.useContext(GlobalContext)
  let {checkDataReady} = global_context
  let [canvas, setCanvas] = React.useState('')

  const callingUpdatePosition = () => {
    console.log('calling update position')
  }

  React.useEffect(()=>{
    // console.log('box_settings',box_settings)

    // const getBoxById = (position) => {
    //   console.log('getBoxById calling, ', position)
    //   return document.querySelector(`div[data-position="${position}"]`)
    // }

    // const getPlaceholderById = (placeholder) => {
    //   return document.querySelector(`div[data-placeholder="${placeholder}"]`)
    // }

    // const placeIntoPosition = (ele_video) => {
    //   console.log('placeinto position', ele_video)
    //   let position_of_ele_video = ele_video.getAttribute('data-position')
    //   let ele_placeholder = getPlaceholderById(position_of_ele_video)

    //   ele_video.style.position = "fixed"
    //   ele_video.style.top = `${ele_placeholder.offsetTop}px`
    //   ele_video.style.left = `${ele_placeholder.offsetLeft}px`
    //   ele_video.style.height = `${ele_placeholder.clientHeight}px`
    //   ele_video.style.width = `${ele_placeholder.clientWidth}px`
    // }

    if (false){
      setIsLoading(false)

      // console.log('findme',box_settings)
      // Object.keys(box_settings).forEach( channel_id => {
      //   console.log('findme',box_pos)
      //   let box_setting = box_settings[channel_id]
      //   let {box_pos} = box_setting
      //   let ele_box = getBoxById(box_pos)

      //   if (checkDataReady(ele_box)){
      //     placeIntoPosition(ele_box)
      //     console.log('findme', 'place into position')
      //   }else{
      //     console.log('findme', 'ele_box is empty')
      //   }
      // })

    }

  },[box_settings])

  return(
    <>
      video_channels
    </>
  )
}

export default VideoChannels