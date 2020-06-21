import React from "react"
import _ from "lodash"

import FirebaseMixinsContext from "../../contexts/firebase-mixins"
import ModalsContext from "../../contexts/modals-context"
import GlobalContext from "../../contexts/global-context"

import SaveChangeButton from "../buttons/save-change-button"
import CancelButton from "../buttons/cancel-button"

function SettingsChannelSelect(props) {
  let channel_options = ["youtube", "rthk"]

  let { combineStyle } = React.useContext(GlobalContext)
  let { channel_type } = props
  let { active_style } = props

  return (
    <div className={combineStyle([active_style.select, active_style.isSmall])}>
      <select>
        <option value="not_selected" disabled>
          select channel type
        </option>
        {channel_options.map(option => {
          if (option === channel_type) {
            return (
              <option value={option} selected>
                {option}
              </option>
            )
          } else {
            return <option value={option}>{option}</option>
          }
        })}
      </select>
    </div>
  )
}

function InputChannelVid(props) {
  let { combineStyle } = React.useContext(GlobalContext)
  let { active_style, video_id } = props
  return (
    <>
      <input
        className={combineStyle([active_style.input, active_style.isSmall])}
        value={video_id}
      />
    </>
  )
}

function InputChannelTitle(props) {
  let { combineStyle } = React.useContext(GlobalContext)
  let { active_style, video_title } = props

  return (
    <>
      <input
        className={combineStyle([active_style.input, active_style.isSmall])}
        value={video_title}
      />
    </>
  )
}

function SettingPerChannel(props) {
  let { active_style } = props
  let { idx } = props
  let { setting_content } = props
  let { channel_type, video_id, video_title } = setting_content

  console.log("findme", setting_content)

  return (
    <tr>
      <td>{idx}</td>
      <td>
        <SettingsChannelSelect
          active_style={active_style}
          channel_type={channel_type}
        />
      </td>
      <td>
        <InputChannelVid active_style={active_style} video_id={video_id} />
      </td>
      <td>
        <InputChannelTitle
          active_style={active_style}
          video_title={video_title}
        />
      </td>
    </tr>
  )
}

function SettingsModal(props) {
  let [is_loading, setIsLoading] = React.useState(true)
  let { active_style } = props
  let { combineStyle } = React.useContext(GlobalContext)
  let [channel_settings, setChannelSettings] = React.useState()

  let { user_settings, checkKeyExist, checkDataReady } = React.useContext(
    GlobalContext
  )

  React.useEffect(() => {
    if (checkKeyExist(user_settings, "channels")) {
      setChannelSettings(user_settings.channels)
      setIsLoading(false)
    } else {
      console.log("channel settings not found in user_settings")
    }
  }, [user_settings])

  let { settings_modal_ref, closeSettingsModal } = React.useContext(
    ModalsContext
  )

  return (
    <div className={active_style.modal} ref={settings_modal_ref}>
      {is_loading ? (
        <Loading />
      ) : (
        <SettingContent
          active_style={active_style}
          channel_settings={channel_settings}
        />
      )}
    </div>
  )
}

function Loading(props) {
  return <>loading</>
}

function SettingContent(props) {
  let { active_style, channel_settings } = props

  let { settings_modal_ref, closeSettingsModal } = React.useContext(
    ModalsContext
  )
  let { getSettings, setSettings } = React.useContext(FirebaseMixinsContext)
  let [json_value, setJsonValue] = React.useState()
  let ref_textarea = React.useRef()

  let { combineStyle, checkKeyExist } = React.useContext(GlobalContext)

  const handleSaveButtonClick = () => {
    // console.log('catch save button click')
    // console.log('compare',ref_textarea.current.value)
    // console.log('compare','{"hello":"louis"}')

    console.log("findme", JSON.parse(ref_textarea.current.value))
    // console.log('findme',setSettings(JSON.parse(ref_textarea.current.value)))
    closeSettingsModal(0)
  }

  const handleCancelButtonClick = () => {
    console.log("catch cancel button click")
    closeSettingsModal()
  }

  const handleChange = e => {
    setJsonValue(e.target.value)
  }

  const loadSettings = () => {
    getSettings()
  }

  const saveSettings = e => {
    console.log("compare", ref_textarea.current.value)
    console.log("compare", '{"hello":"louis"}')
    setSettings(JSON.parse(ref_textarea.current.value))
  }

  return (
    <>
      <div className={active_style.modalBackground}></div>
      <div className={active_style.modalCard}>
        <header className={active_style.modalCardHead}>my settings</header>

        <section className={active_style.modalCardBody}>
          <table
            className={combineStyle([
              active_style.table,
              active_style.isFullWidth,
            ])}
            style={{ width: "100%" }}
            name="channels"
          >
            <tbody>
              <tr>
                <th>#</th>
                <th>type</th>
                <th>id</th>
                <th>title</th>
              </tr>
              {_.range(0, 6 + 1).map(idx => {
                if (checkKeyExist(channel_settings, idx.toString())) {
                  return (
                    <>
                      <SettingPerChannel
                        idx={idx}
                        active_style={active_style}
                        setting_content={channel_settings[idx]}
                      />
                    </>
                  )
                } else {
                  return (
                    <>
                      <tr>
                        <td colSpan="4" style={{ textAlign: "center" }}>
                          setting not exist
                        </td>
                      </tr>
                    </>
                  )
                }
              })}
            </tbody>
          </table>
          {<AddChannelSettings />}
        </section>
        <footer className={active_style.modalCardFoot}>
          <SaveChangeButton onClick={handleSaveButtonClick} />
          <CancelButton onClick={handleCancelButtonClick} />
          <button onClick={loadSettings}>load settings</button>
          <button onClick={saveSettings}>save settings</button>
        </footer>
      </div>
    </>
  )
}

function AddChannelSettings() {
  return <>add channel settings</>
}

export default SettingsModal
