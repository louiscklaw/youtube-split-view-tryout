import React from 'react'

import style from "../../scss/style.module.scss"
import ThemeContext from "../../contexts/theme-context"
import { combineStyle, checkIsNotUndefined } from "../../utils/mixins"

import InputReadOnly from '../input/readonly'
import ChannelTableSeven from '../input/channel-table-seven'

function SettingsContent(props){
  let theme_context = React.useContext(ThemeContext)
  let active_style = checkIsNotUndefined(theme_context)? theme_context.active_style : style

  return(
    <>
      <InputReadOnly {...{name:"username",value:'louiscklaw'}} />
      <ChannelTableSeven />
    </>
  )
}

export default SettingsContent