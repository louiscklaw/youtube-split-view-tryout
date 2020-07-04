import React from "react"

import ThemeContext from "../../contexts/theme-context"

function CancelButton(props) {
  let {active_style} = React.useContext(ThemeContext)

  return (
    <button className={active_style.button} {...props}>
      Close
    </button>
  )
}

export default CancelButton
