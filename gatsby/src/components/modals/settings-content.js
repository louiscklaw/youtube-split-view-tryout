import React from 'react'
import GlobalContext from '../../contexts/global-context'
import InputReadOnly from '../input/readonly'
import InputChannelTableSeven from '../input/channel-table-seven'

function SettingsContent(){
  const {active_style, combineStyle} = React.useContext(GlobalContext)

  return(
    <>
      <InputReadOnly {...{name:"username",value:'louiscklaw'}} />
      <InputChannelTableSeven />
    </>
  )
}

export default SettingsContent