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

  let [current_type_values, setCurrentTypeValues ] = React.useState(Array(3).fill('1'))
  let [current_vid_values, setCurrentVidValues] = React.useState(Array(3).fill(''))
  let [current_title_values, setCurrentTitleValues] = React.useState(Array(3).fill(''))

  let modal_ref = React.useRef()
  let { setSettingsModalRef, closeSettingsModal } = React.useContext(ModalContext)
  setSettingsModalRef(modal_ref)

  const { register, handleSubmit, errors, setValue } = useForm()

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
    let idx = e.target.dataset.idx
    let new_current_type_values = [...current_type_values]
    new_current_type_values[idx] = e.target.value
    setCurrentTypeValues(new_current_type_values)
  }

  const origional_channel_setting = current_profile.channel_setting

  React.useEffect(()=>{
    if (isDefined(current_profile.channel_setting)){
      let current_channel_setting = current_profile.channel_setting

      if (isDefined(current_channel_setting.channel_type)){
        // console.log('settings-modal.js','current_profile.channel_setting',current_profile.channel_setting.channel_type)
        setCurrentTypeValues(current_channel_setting.channel_type)
      }

      if (isDefined(current_channel_setting.channel_vid)){
        setCurrentVidValues(current_channel_setting.channel_vid)
      }

      if (isDefined(current_channel_setting.channel_title)){
        setCurrentTitleValues(current_channel_setting.channel_title)
      }

    }
  }, [current_profile])

  return(
    <>
      <div className={active_style.modal} ref={modal_ref}>
        <div className={active_style.modalBackground} ></div>
        <div className={active_style.modalCard}>
          <header className={active_style.modalCardHead}>
            <p className={active_style.modalCardTitle}>Settings</p>
            <button className={active_style.delete} aria-label="close"></button>
          </header>
          <form onSubmit={handleSubmit(onSubmit)}>
            <section className={active_style.modalCardBody}>
              <table className={combineStyle([active_style.tale, active_style.isFullWidth])}>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>type</th>
                    <th>id</th>
                    <th>title</th>
                  </tr>
                </thead>
                <tbody>
                  {createArrayWithNumbers(3).map((number) => {
                    return(
                      <tr>
                        <td>{number}</td>
                        <td>
                          <select
                            data-idx={number}
                            name={`channel_type[${number}]`}
                            value={current_type_values[number]}
                            ref={register}
                            onChange={handleChannelTypeChange}
                            >
                            <option value="RTHK">RTHK</option>
                            <option value="youtube">youtube</option>
                          </select>
                        </td>
                        <td>
                          <input
                            className={combineStyle([active_style.input, active_style.isSmall])}
                            defaultValue={current_vid_values[number]}
                            name={`channel_vid[${number}]`}
                            ref={register({ required: true })}
                            />
                        </td>

                        <td>
                          <input
                            className={combineStyle([active_style.input, active_style.isSmall])}
                            defaultValue={current_title_values[number]}
                            name={`channel_title[${number}]`}
                            ref={register({ required: true })}
                            />
                        </td>
                      </tr>
                    )
                  })}
                </tbody>

              </table>
            </section>
            <footer className={active_style.modalCardFoot}>
              <input type="submit" className={combineStyle([active_style.button, active_style.isSmall, active_style.isSuccess])} value="Save changes" />

              <button type="button" className={combineStyle([active_style.button, active_style.isSmall])} value="Cancel"
                onClick={()=>{
                  createArrayWithNumbers(3).map(idx => {
                    setValue(`channel_vid[${idx}]`, origional_channel_setting.channel_vid[idx])
                    setValue(`channel_title[${idx}]`, origional_channel_setting.channel_title[idx])
                    setValue(`channel_type[${idx}]`, origional_channel_setting.channel_type[idx])
                  })
                }}
                >
                reset value
              </button>

              <button type="button" className={combineStyle([active_style.button, active_style.isSmall])} value="Close"
                onClose={()=>{
                  onCancelClick()
                }}
                >
                Close
              </button>

            </footer>
          </form>

        </div>
        <div className={active_style.modalCard}>



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