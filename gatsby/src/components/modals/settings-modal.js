import React from "react"

import style from "../../scss/style.module.scss"
import ThemeContext from "../../contexts/theme-context"
import { combineStyle, checkIsNotUndefined, checkContextReady } from "../../utils/mixins"

import SettingsContent from "./settings-content"

import SaveChangeButton from "../buttons/save-change-button"
import CancelButton from "../buttons/cancel-button"


import ProfileContext from '../../contexts/profile-context'
import FirebaseMixinsContext from "../../contexts/firebase-mixins"

import SevenChannelSelect from '../seven-channel-select'


function SettingsModal(props) {
  let theme_context = React.useContext(ThemeContext)
  let active_style = checkIsNotUndefined(theme_context)
    ? theme_context.active_style
    : style

  let { show, onClose } = props

  let [modal_style, setModalStyle] = React.useState([active_style.modal])

  const handleSaveSetting = e => {
    e.preventDefault()
  }

  const handleCancelButtonClick = () => {}

  React.useEffect(() => {
    if (show) {
      setModalStyle([active_style.modal, active_style.isActive])
    } else {
      setModalStyle([active_style.modal])
    }


  }, [show])

  let firebase_mixins_context = React.useContext(FirebaseMixinsContext)

  let [test_input, setTestInput] = React.useState('helloworld')
  const inputOnChange = (e) => {
    let name = e.target.name
    let value = e.target.value
    console.log(e.target.name, e.target.value)
    setTestInput({
      [name]: value
    })
  }

  return (
    <div className={combineStyle(modal_style)}>
      <div className={active_style.modalBackground} onClick={onClose}></div>

      <div className={active_style.modalCard}>
        <header className={active_style.modalCardHead}>
          <p className={active_style.modalCardTitle}>settings</p>
        </header>

        <SevenChannelSelect />

      </div>
    </div>
  )
}

export default SettingsModal
