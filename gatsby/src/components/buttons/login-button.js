import React from 'react'
import GlobalContext from '../../contexts/global-context'

function LoginButton(props){
  const {active_style} = React.useContext(GlobalContext)

  return(
    <button className={active_style.button} {...props}>
      Login
    </button>
  )
}

export default LoginButton
