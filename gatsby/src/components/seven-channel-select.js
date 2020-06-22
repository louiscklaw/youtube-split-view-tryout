import React from "react"
import { useForm } from "react-hook-form";

import style from "../scss/style.module.scss"
import ThemeContext from "../contexts/theme-context"
import { combineStyle, checkIsNotUndefined, checkContextReady } from "../utils/mixins"

import FirebaseMixinsContext from "../contexts/firebase-mixins"
import ProfileContext from '../contexts/profile-context'

import SaveChangeButton from './buttons/save-change-button'
import CancelButton from './buttons/cancel-button'

function TestSelectList(props){
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
      <td><TestSelectList name={`${idx}.channel_type`} reg={reg}/></td>
      <td><input name={`${idx}.channel_vid`} ref={reg} /></td>
      <td><input name={`${idx}.channel_title`} ref={reg} /></td>
    </>
  )
}

function SevenChannelSelect(props){
  let theme_context = React.useContext(ThemeContext)
  let active_style = checkIsNotUndefined(theme_context)
    ? theme_context.active_style
    : style

  let firebase_mixins_context = React.useContext(FirebaseMixinsContext)

  const { register, handleSubmit, watch, errors } = useForm({
    defaultValues:{
      0:{
        channel_type:"youtube",
        channel_vid: 'vid0',
        channel_title: 'title0'
      },
      1:{
        channel_type:"youtube",
        channel_vid: 'vid1',
        channel_title: 'title1'
      },
      2:{
        channel_type:"rthk",
        channel_vid: 'vid2',
        channel_title: 'title2'
      }
    }
  });


  let profile_context = React.useContext(ProfileContext)
  React.useEffect(()=>{
    if (checkContextReady(profile_context)){
      let {loadProfile} = profile_context
      loadProfile()
    }
  },[firebase_mixins_context])


  const handleSaveButtonClick = (data) => {
    if (checkContextReady(profile_context)){
      let {saveProfile} = profile_context
      saveProfile(data)
    }
  }

  const handleLoadSettingsOnClick = (e) =>{
    if (checkContextReady(profile_context)){
      let {loadProfile} = profile_context
      loadProfile()
        .then(ss => {
          // setTestInput(ss.data())
        })
    }
  }

  const handleCancelButtonClick = (e) =>{

  }

  const onSubmit = (data) => {
    handleSaveButtonClick(data)
  }

  return(
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section className={active_style.modalCardBody}>
        <table className={active_style.table}>
            <tr>
              <td>#</td>
              <td>channel_type</td>
              <td>v_id</td>
              <td>v_title</td>
            </tr>
            <tr> <PerChannelInput idx="0" reg={register} /> </tr>
            <tr> <PerChannelInput idx="1" reg={register} /> </tr>
            <tr> <PerChannelInput idx="2" reg={register} /> </tr>
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
                <SaveChangeButton />
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

export default SevenChannelSelect
