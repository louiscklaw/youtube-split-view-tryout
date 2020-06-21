import React from "react"

import GlobalContext from "../contexts/global-context"
import ModalContext from "../contexts/modals-context"
import FirebaseMixinsContext from "../contexts/firebase-mixins"

function Footer(props) {
  let { active_style } = props

  const { showSettingsModal, showAnnouncementModal } = React.useContext(
    ModalContext
  )

  const {
    firebaseLogout,
    user_info,
    getSettings,
    setSettings,
  } = React.useContext(FirebaseMixinsContext)

  const [footer_user_info, setFooterUserInfo] = React.useState(null)

  React.useEffect(() => {
    setFooterUserInfo(JSON.stringify(user_info.uid))
  }, [user_info])

  return (
    <div className={active_style.footerCustom}>
      <ul>
        <li>
          <button onClick={showSettingsModal}>settings</button>
        </li>
        <li>
          <button onClick={firebaseLogout}>logout</button>
        </li>
        <li>
          <button onClick={showAnnouncementModal}>announcement</button>
        </li>
      </ul>

      <div>{footer_user_info}</div>
    </div>
  )
}

export default Footer
