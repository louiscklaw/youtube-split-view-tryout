import React from 'react'

import GlobalContext from '../contexts/global-context'
import ModalContext from '../contexts/modals-context'
import FirebaseMixinsContext from '../contexts/firebase-mixins'

function Footer(props){
  let {active_style} = props

  let ref_textarea = React.useRef()
  let [json_value, setJsonValue] = React.useState()

  const {
    showSettingsModal,
    showAnnouncementModal
  } = React.useContext(ModalContext)

  const {user_settings} = React.useContext(GlobalContext)
  const {firebaseLogout, user_info, getSettings, setSettings} = React.useContext(FirebaseMixinsContext)

  const [footer_user_info, setFooterUserInfo] = React.useState(null)

  const loadSettings = () => {
    getSettings()
  }

  const saveSettings = (e) => {
    console.log('compare',ref_textarea.current.value)
    console.log('compare','{"hello":"louis"}')
    setSettings(JSON.parse(ref_textarea.current.value))
  }

  React.useEffect(()=>{
    setFooterUserInfo(JSON.stringify(user_info.uid))
  },[user_info])


  const handleChange = (e) => {
    setJsonValue(e.target.value)
  }

  React.useEffect(()=>{
    setJsonValue(JSON.stringify(user_settings))
  },[user_settings])

  return(
    <div className={active_style.footerCustom}>
      <ul>
        <li><button onClick={showSettingsModal}>settings</button></li>
        <li><button onClick={firebaseLogout}>logout</button></li>
        <li><button onClick={showAnnouncementModal}>announcement</button></li>
        <li><button onClick={loadSettings}>load settings</button></li>
        <li><button onClick={saveSettings}>save settings</button></li>
      </ul>

      <textarea
        rows=""
        value={json_value} onChange={handleChange}
        ref={ref_textarea}
        />

      <div>
        {JSON.stringify(user_settings)}
        {footer_user_info}

      </div>

    </div>
  )
}

export default Footer