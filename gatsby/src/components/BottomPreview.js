import React from "react"

import style from "../scss/style.module.scss"
import ThemeContext from "../contexts/theme-context"
import { checkIsNotUndefined } from "../utils/mixins"

import _ from "lodash"
import PreviewChannel from "../components/preview-channel"

function BottomPreview(props) {
  let theme_context = React.useContext(ThemeContext)
  let active_style = checkIsNotUndefined(theme_context)
    ? theme_context.active_style
    : style

  return (
    <>
      <div className={active_style.bottomPreviewChannel}>
        {_.range(1, 6 + 1).map(idx => {
          return <PreviewChannel placeholder={idx} />
        })}
      </div>
    </>
  )
}

export default BottomPreview
