import React from 'react'
import _ from 'lodash'

import ModalsContext from '../../contexts/modals-context'
import GlobalContext from '../../contexts/global-context'

import SettingsForm from '../forms/settings_form'
import SaveChangeButton from '../buttons/save-change-button'
import CancelButton from '../buttons/cancel-button'

function SettingsModal(props){
  let {active_style} = props
  let {combineStyle} = React.useContext(GlobalContext)
  let {settings_modal_ref, closeSettingsModal} = React.useContext(ModalsContext)

  const handleSaveButtonClick = () => {
    console.log('catch save button click')
    closeSettingsModal(0)
  }

  const handleCancelButtonClick = () => {
    console.log('catch cancel button click')
    closeSettingsModal()

  }

  return(
    <div className={active_style.modal} ref={settings_modal_ref}>
      <div className={active_style.modalBackground}></div>

      <div className={active_style.modalCard}>

        <header className={active_style.modalCardHead}>
          my settings
        </header>
        <section className={active_style.modalCardBody}>

          <table className={combineStyle([
              active_style.table, active_style.isFullWidth
              ])}
              style={{width:'100%'}}
              name="channels"
            >
              <tbody>
                <tr>
                  <th>#</th>
                  <th>type</th>
                  <th>id</th>
                  <th>title</th>
                </tr>
              </tbody>
              {
                _.range(0,6+1).map(idx => {
                  return(
                    <tr>
                      <th>#</th>
                      <th>type</th>
                      <th>id</th>
                      <th>title</th>
                    </tr>
                  )
                })
              }
          </table>

        </section>
        <footer className={active_style.modalCardFoot}>
          <SaveChangeButton onClick={handleSaveButtonClick} />
          <CancelButton onClick={handleCancelButtonClick} />
        </footer>

      </div>
    </div>
  )
}

export default SettingsModal