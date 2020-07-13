import React from 'react'
import _ from 'lodash'

import GlobalContext from '~contexts/global-context'
import ThemeContext from '~contexts/theme-context'

function ChannelVid(props){
  let {active_style} = React.useContext(ThemeContext)
  let {combineStyle} = React.useContext(GlobalContext)

  return(
    <>
      <input className={combineStyle([
        active_style.input, active_style.isSmall
      ])} type="text" placeholder="channel vid" />
    </>
  )
}

export default ChannelVid