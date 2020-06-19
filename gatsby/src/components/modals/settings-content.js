import React from 'react'
import GlobalContext from '../../contexts/global-context'
import InputReadOnly from '../input/readonly'
import InputChannelTableSeven from '../input/channel-table-seven'

function SettingsContent(){
  return(
    <>
      {/* <InputReadOnly {...{name:"username",value:'louiscklaw'}} /> */}
      <InputChannelTableSeven />
      settings content
    </>
  )
}

export default SettingsContent