import React from 'react'
import GlobalContext from '../../contexts/global-context'

function InputReadOnly(props){
  const {active_style, combineStyle} = React.useContext(GlobalContext)
  let {label, value} = props
  return(

    <div className={combineStyle([
      active_style.field, active_style.isHorizontal
    ])}>
      <div className={combineStyle([
        active_style.fieldLabel, active_style.isSmall
      ])}>
        <label className={active_style.label}>username</label>
      </div>
      <div className={combineStyle([
        active_style.fieldBody, active_style.isSmall
      ])}>
        <div className={active_style.control}>
          <input
            className={active_style.input}
            type="text"
            placeholder="username email"
            disabled
            {...props}
            />
        </div>
      </div>
    </div>

  )
}


export default InputReadOnly