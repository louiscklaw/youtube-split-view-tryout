import React from 'react'
import _ from 'lodash'

import GlobalContext from '~contexts/global-context'
import ThemeContext from '~contexts/theme-context'

function ChannelType(props){
  let {active_style} = React.useContext(ThemeContext)
  let {combineStyle} = React.useContext(GlobalContext)

  return(
    <>
      <div className={combineStyle([
        active_style.select,
        active_style.isSmall
      ])}>
        <select>
          <option value="youtube">youtube</option>
          <option value="RTHK">RTHK</option>
        </select>
      </div>
    </>
  )
}

export default ChannelType
