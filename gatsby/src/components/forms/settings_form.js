import React from 'react'

import SaveChangeButton from '../buttons/save-change-button'
import CancelButton from '../buttons/cancel-button'

import GlobalContext from '../../contexts/global-context'

function SettingsForm(props){
  let {active_style} = props
  let {combineStyle} = React.useContext(GlobalContext)

  const handleSaveButtonClick = () => {
    console.log('catch save button click')
  }

  const handleCancelButtonClick = () => {
    console.log('catch cancel button click')
  }

  React.useEffect(()=>{
    let form_save_settings = document.querySelector('#save-settings')
    form_save_settings
      .addEventListener('submit',(e)=>{
        e.preventDefault()
      })
  },[])

  return(
    <>
      <form id="save-settings">
        <section className={active_style.modalCardBody}>

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
    </>
  )
}

export default SettingsForm