import React from "react"

import ThemeContext from "../contexts/theme-context"

function PreviewChannel(props) {
  const {active_style} = React.useContext(ThemeContext)

  let { placeholder } = props

  return (
    <div className={active_style.previewChannel} data-placeholder={placeholder}>
      previewChannel
    </div>
  )
}

export default PreviewChannel
