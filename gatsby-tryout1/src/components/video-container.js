import React from "react"

import style from "../scss/style.module.scss"
import ThemeContext from "../contexts/theme-context"
import YoutubeCell from "./youtube-cell"

import {checkIsNotUndefined} from '../utils/mixins'

function VideoContainer(props) {
  let theme_context = React.useContext(ThemeContext)
  let active_style = checkIsNotUndefined(theme_context)
    ? theme_context.active_style
    : style

  let {vid, box_pos, pass_ref} = props

  return (
    <div
      className={active_style.box1}
      data-position={box_pos}
      >
      <YoutubeCell {...props} />
    </div>
  )
}

export default VideoContainer
