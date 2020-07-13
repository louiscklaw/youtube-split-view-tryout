import React from 'react'
import _ from 'lodash'

import { useForm } from 'react-hook-form'

import ProfileContext from '~contexts/profile-context'
import ThemeContext from "~contexts/theme-context"
import ModalContext from '~contexts/modal-context'
import GlobalContext from '~contexts/global-context'
import {isDefined} from '~mixins/general'

function createArrayWithNumbers(length) {
  return Array.from({ length }, (_, k) => k);
}


function TestSettingsModal(props){
  let {active_style} = React.useContext(ThemeContext)
  let {current_profile, saveChannelSettingToFirebase} = React.useContext(ProfileContext)
  const {combineStyle} = React.useContext(GlobalContext)

  let modal_ref = React.useRef()
  let { setSettingsModalRef, closeSettingsModal } = React.useContext(ModalContext)
  setSettingsModalRef(modal_ref)

  const { register, handleSubmit, errors } = useForm()

  const onSubmit = (data) => {
    saveChannelSettingToFirebase(data)
      .then(() => {
        closeSettingsModal()
      })
  }

  const onCancelClick = () => {
    closeSettingsModal()
  }

  const handleChannelTypeChange = (e) =>{
    console.log('settings-modal.js','handleChannelTypeChange', e.target.value)
  }

  return(
    <>
      <div className={active_style.modal} ref={modal_ref}>
        <div className={active_style.modalBackground} ></div>
        <div className={active_style.modalCard}>
          <form onSubmit={handleSubmit(onSubmit)}>
            {createArrayWithNumbers(3).map((number) => {
              let current_type_value = ''
              let current_vid_value = ''
              let current_title_value = ''

              if (isDefined(current_profile.channel_setting)){
                current_type_value = current_profile.channel_setting.channel_type[number] || ''
                current_vid_value = current_profile.channel_setting.channel_vid[number] || ''
                current_title_value = current_profile.channel_setting.channel_title[number] || ''

                console.log('channel_type', current_profile.channel_setting.channel_type[number])
              }

              return(
                <>
                  <select
                    name={'test_select'}
                    onChange={handleChannelTypeChange}
                    defaultValue={current_type_value}
                    ref={props.reg}
                    >
                    <option value="RTHK">RTHK</option>
                    <option value="youtube0">youtube0</option>
                    <option value="youtube1">youtube1</option>
                    <option value="youtube2">youtube2</option>
                    <option value="youtube3">youtube3</option>
                    <option value="youtube4">youtube4</option>
                    <option value="youtube5">youtube5</option>
                    <option value="youtube6">youtube6</option>
                  </select>

                  <input
                    className={combineStyle([active_style.input, active_style.isSmall])}
                    defaultValue={current_vid_value}
                    name={`channel_vid[${number}]`}
                    ref={register({ required: true })}
                    />

                  <input
                    className={combineStyle([active_style.input, active_style.isSmall])}
                    defaultValue={current_title_value}
                    name={`channel_title[${number}]`}
                    ref={register({ required: true })}
                    />
                </>
              )
            })}

            <input type="submit" />
          </form>
        </div>
      </div>
    </>
  )
}

function SettingsModal(props){
  const { register, handleSubmit } = useForm()

  const onSubmit = data => console.log(data);

  return(
    <>
      <TestSettingsModal />
    </>
  )
}

export default SettingsModal