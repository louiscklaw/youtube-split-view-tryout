import React from "react"
import _ from "lodash"

import ThemeContext from "../contexts/theme-context"

import PreviewChannel from "../components/preview-channel"

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
  let {active_style} = React.useContext(ThemeContext)

  let { narrow_window } = props
  let [right_preview_canvas, setRightPreviewCanvas] = React.useState("")

  React.useEffect(() => {
    if (narrow_window) {
      setRightPreviewCanvas(<NarrowScreenRightPreview />)
    } else {
      setRightPreviewCanvas(<NormalScreenRightPreview />)
    }
  }, [narrow_window])

  return <>right preview</>
}

export default RightPreview
