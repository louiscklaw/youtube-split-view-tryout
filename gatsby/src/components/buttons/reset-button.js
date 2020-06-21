import React from "react"
import GlobalContext from "../../contexts/global-context"

function ResetButton() {
  const { active_style } = React.useContext(GlobalContext)
  return (
    <button type="reset" className={active_style.button}>
      Reset
    </button>
  )
}

export default ResetButton
