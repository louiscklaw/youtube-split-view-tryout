import React from "react"
import GlobalContext from "../../contexts/global-context"

function SaveChangesButton(props) {
  const { active_style, combineStyle } = React.useContext(GlobalContext)

  return (
    <button
      className={combineStyle([active_style.button, active_style.isSuccess])}
      {...props}
    >
      Save changes
    </button>
  )
}

export default SaveChangesButton
