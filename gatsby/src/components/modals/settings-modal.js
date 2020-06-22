import React from "react"

import style from "../../scss/style.module.scss"

import { combineStyle, checkIsNotUndefined } from "../../utils/mixins"

import ThemeContext from "../../contexts/theme-context"

import CloseButton from "../buttons/close-button"


function SettingsModal(props){
  let theme_context = React.useContext(ThemeContext)
  let active_style = checkIsNotUndefined(theme_context)? theme_context.active_style : style

  let {show, onClose} = props

  let [modal_style, setModalStyle] = React.useState([active_style.modal])

  React.useEffect(()=>{
    if(show){
      setModalStyle([active_style.modal, active_style.isActive])
    }else{
      setModalStyle([active_style.modal])
    }
  },[show])

  return(
    <div className={combineStyle(modal_style)}>
      settings modal
    </div>
  )
}

export default SettingsModal
