import React from 'react'

import GlobalContext from '../contexts/global-context'

function Footer(){
  const {active_style} = React.useContext(GlobalContext)
  return(
    <div className={active_style.footerCustom}>
      this is footer
    </div>
  )
}

export default Footer