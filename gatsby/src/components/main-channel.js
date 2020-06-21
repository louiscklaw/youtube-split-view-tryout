import React from "react"

import GlobalContext from "../contexts/global-context"

function MainChannel() {
  let { active_style } = React.useContext(GlobalContext)
  return (
    <div className={active_style.mainChannel} data-placeholder="0">
      main channel
    </div>
  )
}

export default MainChannel
