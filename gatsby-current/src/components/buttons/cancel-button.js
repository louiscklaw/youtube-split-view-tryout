import React from "react"

import ThemeContext from "../../contexts/theme-context"

function CancelButton(props) {
  let {active_style} = React.useContext(ThemeContext)

  return (
    <input
      type="reset"
      value="Reset"
      className={active_style.button}
      {...props}
    />
  )
}

export default CancelButton
