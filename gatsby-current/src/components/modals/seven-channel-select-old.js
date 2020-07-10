import React from "react"
import _ from 'lodash'

import { useForm } from "react-hook-form";

import GlobalContext from '~contexts/global-context'
import ProfileContext from '~contexts/profile-context'
import ThemeContext from '~contexts/theme-context'
import ModalContext from '~contexts/modal-context'

function MainForm(props){
  let {active_style} = React.useContext(ThemeContext)

  return(
    <>
    </>
  )
}

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
      <td><ChannelTypeSelectList name={`channel_type`} reg={reg}/></td>
      <td><input name={`channel_vid`} ref={reg} /></td>
      <td><input name={`channel_title`} ref={reg} /></td>
    </>
  )
}

function createArrayWithNumbers(length) {
  return Array.from({ length }, (_, k) => k);
}

function SevenChannelSelect(props){
  const {combineStyle} = React.useContext(GlobalContext)
  let {active_style} = React.useContext(ThemeContext)
  let {closeSettingsModal} = React.useContext(ModalContext)

  let {current_profile, saveChannelSettingToFirebase} = React.useContext(ProfileContext)

  const { control, register, handleSubmit, watch, errors, reset } = useForm()

  let test_default_value = {}

  const onSubmit = (data) => {
    console.log(data)
    saveChannelSettingToFirebase(data)
      .then(() => {
        closeSettingsModal()
      })
  }

  const resetForm = () =>{
    reset(test_default_value)
  }

  const onCloseButtonClick = (e) => {
    resetForm()
    closeSettingsModal()
  }

  const onResetButtonClick = (e) =>{
    resetForm()
  }

  // React.useEffect(()=>{
  //   if (Object.keys(test_default_value).length > 0){
  //     setIsLoading(false)
  //   }else{
  //     setIsLoading(true)
  //   }
  // },[test_default_value])

  return(
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {createArrayWithNumbers(3).map((number) => {
          return (
            <div key={number}>

                <input name={`channel_type[${number}]`} value="channel_type" ref={register({ required: true })} />
                <input name={`channel_vid[${number}]`} value="channel_vid" ref={register({ required: true })} />
                <input name={`channel_title[${number}]`} value="channel_title" ref={register({ required: true })} />

            </div>
          );
        })}

        <button type="submit">Submit</button>
      </form>
      {JSON.stringify(current_profile.channel_setting)}
      {/* { is_loading? <Loading /> : <MainForm
        test_default_value={ test_default_value }
        close_modal={close_modal}
        /> } */}

    </>
  )
}

export default SevenChannelSelect