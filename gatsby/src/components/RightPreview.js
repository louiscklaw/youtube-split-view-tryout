import React from "react"
import _ from "lodash"

import PreviewChannel from "../components/preview-channel"

import style from '../scss/style.module.scss'
import ThemeContext from '../contexts/theme-context'
import {checkIsNotUndefined} from '../utils/mixins'

function NarrowScreenRightPreview() {
  return <></>
}

function NormalScreenRightPreview() {
  return (
    <>
      {_.range(7, 16 + 1).map(idx => {
        return <PreviewChannel placeholder={idx} />
      })}
    </>
  )
}

function RightPreview(props) {
  let theme_context = React.useContext(ThemeContext)
  let active_style = checkIsNotUndefined(theme_context)? theme_context.active_style : style

  let {narrow_window } = props
  let [right_preview_canvas, setRightPreviewCanvas] = React.useState("")

  React.useEffect(()=>{
    if (narrow_window) {
      setRightPreviewCanvas(<NarrowScreenRightPreview />)
    } else {
      setRightPreviewCanvas(<NormalScreenRightPreview />)
    }
  },[narrow_window])

  return(
    <>
      right preview
    </>
  )
}


export default RightPreview