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
      <td><ChannelTypeSelectList name={`${idx}.channel_type`} reg={reg}/></td>
      <td><input name={`${idx}.channel_vid`} ref={reg} /></td>
      <td><input name={`${idx}.channel_title`} ref={reg} /></td>
    </>
  )
}

function SevenChannelSelect(props){
  const {combineStyle} = React.useContext(GlobalContext)
  let {active_style} = React.useContext(ThemeContext)
  let {closeSettingsModal} = React.useContext(ModalContext)


  let {current_profile, saveChannelSettingToFirebase} = React.useContext(ProfileContext)

  const { register, handleSubmit, watch, errors, reset } = useForm({ defaultValues: current_profile.channel_setting })

  let test_default_value = {}

  const onSubmit = (data) => {
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
      <form onSubmit={handleSubmit(async (data) => await onSubmit(data))}>
        <section className={active_style.modalCardBody}>
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
      {JSON.stringify(current_profile.channel_setting)}
      {/* { is_loading? <Loading /> : <MainForm
        test_default_value={ test_default_value }
        close_modal={close_modal}
        /> } */}

    </>
  )
}

export default SevenChannelSelect