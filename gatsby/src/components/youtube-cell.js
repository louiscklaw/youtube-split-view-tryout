import React from "react"

import { checkDataReady } from "../utils/mixins"

function YoutubeCell(props) {
  let [vid, setVid] = React.useState()
  let {v_width, v_height} = props

  React.useEffect(()=>{
    setVid(props.vid)
  }, props)

  return(
    <iframe
    // width={v_width}
    // height={v_height}
    src={`https://www.youtube.com/embed/${vid}`}
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    ref={props.pass_ref}
    >

    </iframe>
  )
}

export default YoutubeCell
