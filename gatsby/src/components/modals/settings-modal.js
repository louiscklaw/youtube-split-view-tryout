import React from "react"

import style from "../../scss/style.module.scss"
import ThemeContext from "../../contexts/theme-context"
import { combineStyle, checkIsNotUndefined } from "../../utils/mixins"

import SettingsContent from './settings-content'

import SaveChangeButton from '../buttons/save-change-button'
import CancelButton from '../buttons/cancel-button'


function SettingsModal(props){
  let theme_context = React.useContext(ThemeContext)
  let active_style = checkIsNotUndefined(theme_context)? theme_context.active_style : style

  let {show, onClose} = props

  let [modal_style, setModalStyle] = React.useState([active_style.modal])


  const handleSaveSetting = (e) => {
    e.preventDefault();
  }

  const handleCancelButtonClick = () => {
  }

  const handleSaveButtonClick = () =>{
  }

  React.useEffect(()=>{
    if(show){
      setModalStyle([active_style.modal, active_style.isActive])
    }else{
      setModalStyle([active_style.modal])
    }
  },[show])

  return(
    <div className={combineStyle(modal_style)}>
      <div className={active_style.modalBackground} onClick={onClose}></div>

      <div className={active_style.modalCard}>
        <header className={active_style.modalCardHead}>
          <p className={active_style.modalCardTitle}>
            settings
          </p>
        </header>

        <form onSubmit={handleSaveSetting} id="#save-settings">
          <section className={active_style.modalCardBody}>
            <SettingsContent />
          </section>


          <footer className={active_style.modalCardFoot}>

            <div className={combineStyle([active_style.field, active_style.isGrouped])} >
              <div className={active_style.control}>
                <SaveChangeButton onClick={handleSaveButtonClick} />
              </div>

              <div className={active_style.control}>
                <CancelButton onClick={handleCancelButtonClick} />
              </div>
            </div>

          </footer>
        </form>
      </div>
    </div>
  )
}

export default SettingsModal
