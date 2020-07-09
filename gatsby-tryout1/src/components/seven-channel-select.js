import React from "react"
import _ from 'lodash'
import { useForm } from "react-hook-form";

import style from "../scss/style.module.scss"
import ThemeContext from "../contexts/theme-context"
import { combineStyle, checkIsNotUndefined, checkContextReady } from "../utils/mixins"

import FirebaseMixinsContext from "../contexts/firebase-mixins"
import ProfileContext from '../contexts/profile-context'

import SaveChangeButton from './buttons/save-change-button'
// import CancelButton from './buttons/cancel-button'
import ResetButton from './buttons/reset-button'
import TestForm from './forms/test-form'

function ChannelTypeSelectList(props){
  return(
    <>
      <select {...props} ref={props.reg}>
        <option value="rthk">rthk</option>
        <option value="youtube">youtube</option>
      </select>
    </>
  )
}

function PerChannelInput(props){
  let {idx} = props
  let {reg} = props
  return(
    <>
      <td>{idx}</td>
      <td><ChannelTypeSelectList name={`channel_setting.${idx}.channel_type`} reg={reg}/></td>
      <td><input name={`channel_setting.${idx}.channel_vid`} ref={reg} /></td>
      <td><input name={`channel_setting.${idx}.channel_title`} ref={reg} /></td>
    </>
  )
}

function Loading(props){
  return(
    <>
      Loading
    </>
  )
}

function MainForm(props){
  let theme_context = React.useContext(ThemeContext)
  let active_style = checkIsNotUndefined(theme_context)
    ? theme_context.active_style
    : style

  let profile_context = React.useContext(ProfileContext)
  let current_profile = checkIsNotUndefined(profile_context)
    ? profile_context.current_profile
    : {}

  let {test_default_value, close_modal} = props
  const { register, handleSubmit, watch, errors, reset } = useForm({
    defaultValues: test_default_value
  })

  const onSubmit = (data) => {
    if (checkContextReady(profile_context)){
      let {updateCurrentProfileAndSaveToFirebase, packProfile} = profile_context
      updateCurrentProfileAndSaveToFirebase(packProfile(
        current_profile,
        "channel_setting", data.channel_setting)
        )
        .then(() => {
          close_modal()
        })
        .catch(err =>{
          console.log('seven-channel-select.js', 'error found during submit profile', data)
        })

      // saveProfile(data)
      //   .then(() => {
      //     updateCurrentProfile(data)
      //     close_modal()
      //   })
      //   .catch(err =>{
      //     console.log('seven-channel-select.js', 'error found during submit profile', data)
      //   })

    }
  }

  const resetForm = () =>{
    reset(test_default_value)
  }

  const onCloseButtonClick = (e) => {
    resetForm()
    close_modal()
  }

  const onResetButtonClick = (e) =>{
    resetForm()
  }

  const onButtonClick = (e) => {
    console.log("onButtonClick", current_profile)
  }

  return(
    <>
      <form onSubmit={handleSubmit(async (data) => await onSubmit(data))}>
        <section className={active_style.modalCardBody}>
          <pre>
            {JSON.stringify(current_profile)}
          </pre>

          <table className={active_style.table}>
            <tbody>
              <tr>
                <td>#</td>
                <td>channel_type</td>
                <td>v_id</td>
                <td>v_title</td>
              </tr>
              {
                _.range(0,6+1).map( idx =>{ return(
                  <tr>
                    <PerChannelInput idx={idx} reg={register} />
                  </tr>
                ) } )
              }
            </tbody>
          </table>
        </section>

        <footer className={active_style.modalCardFoot}>
          <div
            className={combineStyle([
              active_style.field,
              active_style.isGrouped,
            ])}
            >

            <div className={active_style.control}>
              <input
                type="submit"
                className={combineStyle([active_style.button, active_style.isSuccess])}
                {...props}
                value="save settings"
              />
            </div>

            <div className={active_style.control}>
              <input type="button" onClick={onResetButtonClick} value="reset"/>
            </div>

            <div className={active_style.control}>
              <input type="button" onClick={onCloseButtonClick} value="close"/>
            </div>

          </div>
        </footer>

      </form>
    </>
  )
}

function SevenChannelSelect(props){
  let [is_loading, setIsLoading] = React.useState(true)
  let {test_default_value, close_modal} = props

  React.useEffect(()=>{
    console.log('useeffect', test_default_value)
    if (Object.keys(test_default_value).length > 0){
      setIsLoading(false)
    }else{
      setIsLoading(true)
    }
  },[test_default_value])

  return(
    <>
      { is_loading? <Loading /> : <MainForm
        test_default_value={ test_default_value }
        close_modal={close_modal}
        /> }
      {/* { is_loading? <Loading /> : <TestForm test_default_value={ test_default_value } /> } */}
    </>
  )
}

export default SevenChannelSelect
