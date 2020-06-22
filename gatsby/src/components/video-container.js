import React from "react"

import style from '../scss/style.module.scss'
import ThemeContext from '../contexts/theme-context'
import YoutubeCell from "./youtube-cell"

function VideoContainer(props) {
  let theme_context = React.useContext(ThemeContext)
  let active_style = checkIsNotUndefined(theme_context)? theme_context.active_style : style

  let { box_pos, box_setting } = props

  React.useEffect(() => {
    console.log("youtubecellcontaienr logging test")
  })

  return (
    <div className={active_style.box1} data-position={box_pos}>
      <YoutubeCell box_setting={box_setting} />
    </div>
  )
}

export default VideoContainer
