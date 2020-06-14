import React from 'react'

import TestModal from './test-modal'
import GlobalContext from '../contexts/global-context'

function Footer(){
  const {active_style} = React.useContext(GlobalContext)
  const modal_ref = React.useRef(null)

  React.useEffect(() => {
    // document.querySelector(`#${modal_ref.current.id}`)
    console.log(modal_ref)
  })

  const onButtonClick = () => {
    // alert('helloworld')
    console.log(modal_ref.current)
    // document.querySelector(`.${modal_ref.current}`)
  }

  return(
    <div className={active_style.footerCustom}>
      this is footer
      <TestModal ref={modal_ref}/>
      <button onClick={onButtonClick}>test button</button>
    </div>
  )
}

export default Footer