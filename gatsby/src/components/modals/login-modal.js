import React from 'react'
import _ from 'lodash'

import ModalCloseButton from '../buttons/modal-close-button'

import InputEmail from '../input/email'
import InputPassword from '../input/password'

import GlobalContext from '../../contexts/global-context'

function LoginModal(props){
  let {combineStyle} = React.useContext(GlobalContext)
  let {active_style} = props

  return(
    <div className={combineStyle([active_style.modal, active_style.isActive])}>
      <div className={active_style.modalBackground}></div>

      <div className={active_style.modalCard}>
        <section className={active_style.modalCardBody}>

            <div className={active_style.container}>
              <div className={active_style.loginChooser}>
                <div>
                  <InputEmail />
                </div>

                <div>
                  <InputPassword />
                </div>

                <div className={active_style.socialLogin}>
                  <div> github login</div>
                  <div> google login</div>
                  <div> facebook login</div>
                </div>
              </div>
            </div>

        </section>
      </div>
    </div>
  )
}

export default LoginModal