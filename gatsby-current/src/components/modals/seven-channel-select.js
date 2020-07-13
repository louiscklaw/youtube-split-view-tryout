import React from 'react';
import _ from 'lodash'

import { useForm } from 'react-hook-form';

import GlobalContext from '~contexts/global-context'
import ProfileContext from '~contexts/profile-context'
import ThemeContext from '~contexts/theme-context'
import ModalContext from '~contexts/modal-context'

import {default_profile} from '~constants/default_profile'

import {isDefined} from '~mixins/general'

function createArrayWithNumbers(length) {
  return Array.from({ length }, (_, k) => k);
}

function SevenChannelSelect(props) {
  let {current_profile, saveChannelSettingToFirebase} = React.useContext(ProfileContext)
  let {closeSettingsModal} = React.useContext(ModalContext)
  const {combineStyle} = React.useContext(GlobalContext)
  let {active_style} = React.useContext(ThemeContext)

  const { register, handleSubmit, errors } = useForm()

  React.useEffect(()=>{
    console.log('seven-channel-select.js','current_profile',current_profile)
  },[])

  const onSubmit = (data) => {

    saveChannelSettingToFirebase(data)
      .then(() => {
        closeSettingsModal()
      })

  }

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <table className={combineStyle([
          active_style.table,
          active_style.isFullwidth
          ])}>
        <thead>
          <tr>
            <th>#</th>
            <th>type</th>
            <th>vid</th>
            <th>title</th>
          </tr>
        </thead>
        <tbody>
          {createArrayWithNumbers(3).map((number) => {
          let current_type_value = ''
          let current_vid_value = ''
          let current_title_value = ''

          if (isDefined(current_profile.channel_setting)){
            current_type_value = current_profile.channel_setting.channel_type[number] || ''
            current_vid_value = current_profile.channel_setting.channel_vid[number] || ''
            current_title_value = current_profile.channel_setting.channel_title[number] || ''
          }

          return (
            <tr key={number}>
                <td>{number}</td>

                <td><input className={combineStyle([active_style.input, active_style.isSmall])} name={`channel_type[${number}]`} ref={register({ required: true })} defaultValue={current_type_value} /></td>
                <td><input className={combineStyle([active_style.input, active_style.isSmall])} name={`channel_vid[${number}]`} ref={register({ required: true })} defaultValue={current_vid_value} /></td>
                <td><input className={combineStyle([active_style.input, active_style.isSmall])} name={`channel_title[${number}]`} ref={register({ required: true })} defaultValue={current_title_value} /></td>

            </tr>
          );
        })}
        </tbody>
      </table>



      <input type="submit" />
    </form>
  );
}

export default SevenChannelSelect