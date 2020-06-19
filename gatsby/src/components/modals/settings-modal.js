import React from 'react'
import _ from 'lodash'

import SettingsContent from './settings-content'

import GlobalContext from '../../contexts/global-context'
import ModalContext from '../../contexts/modals-context'

import SaveChangeButton from '../buttons/save-change-button'
import CancelButton from '../buttons/cancel-button'


function SettingsModal(props){
  const {combineStyle, saveChannels, checkDataReady} = React.useContext(GlobalContext)
  const global_context = React.useContext(GlobalContext)
  const { closeSettingsModal} = React.useContext(ModalContext)

  const [setting_canvas, setSetttingCanvas] = React.useState()

  const handleBackgroundClick = () => {

  }

  const handleSaveButtonClick = () =>{
    let result = saveChannels()
    return closeSettingsModal()
  }

  const handleCancelButtonClick = () => {
    return closeSettingsModal()
  }

  const handleSaveSetting = (e) => {
    e.preventDefault();
    let form = e.target
    // let channel_json = _.range(0,6).map( idx => {
    //   return {
    //     video_id: form.video_id[idx].value,
    //     video_title: form.video_title[idx].value,
    //     channel_type: form.channel_type[idx].value
    //   }
    // })
    // channel_json = {...channel_json}
    // console.log(form.video_id[0].value)
    // console.log(form.video_title[0].value)
    // console.log(form.channel_type[0].value)
  }

  React.useEffect(()=>{
    if (checkDataReady(global_context.active_style)){
      let {active_style} = global_context

      setSetttingCanvas((
        <div className={combineStyle([ active_style.modal ])} ref={props.modal_ref}>
          <div className={active_style.modalBackground} onClick={handleBackgroundClick}></div>

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
      ))
    }else{
      setSetttingCanvas((
        <div style={{backgroundColor:'red'}}>
          settings loading
        </div>
      ))
    }
  })


  return(
    <>
      {setting_canvas}
    </>
  )
}


export default SettingsModal