import React from 'react'
import GlobalContext from '../../contexts/global-context'

function SettingsContent(){
  const {active_style, combineStyle} = React.useContext(GlobalContext)

  return(
    <>
      <section className={active_style.section}>
        <div className={active_style.container}>
            <div className={active_style.field}>
              <label className={active_style.label}>Name</label>
              <div className={active_style.control}>
                <input className={active_style.input} type="text" placeholder="Text input" />
              </div>
            </div>

            <div className={active_style.field}>
              <label className={active_style.label}>Username</label>
              <div className={combineStyle([
                active_style.control,
                active_style.hasIconsLeft,
                active_style.hasIconsRight
              ])}>
                <input className={[
                  active_style.input,
                  active_style.isSuccess
                ].join(" ")} type="text" placeholder="Text input" value="bulma" />
                <span className={[
                  active_style.icon,
                  active_style.isSmall,
                  active_style.isLeft
                ].join(" ")} >
                  <i className="fas fa-user"></i>
                </span>
                <span className={[
                  active_style.icon,
                  active_style.isSmall,
                  active_style.isRight
                ].join(" ")} >
                  <i className="fas fa-check"></i>
                </span>
              </div>
              <p className={[ active_style.help, active_style.isSuccess ].join(" ")}>
                This username is available
              </p>
            </div>



            <div className={active_style.field}>
              <label className={active_style.label}>Email</label>
              <div className={combineStyle([
                active_style.control,
                active_style.hasIconsLeft,
                active_style.hasIconsRight
              ])}>
                <input className={combineStyle([
                  active_style.input,
                  active_style.isDanger
                  ])} type="email" placeholder="Email input" value="hello@" />
                <span className={combineStyle([
                  active_style.icon,
                  active_style.isSmall,
                  active_style.isLeft
                ])}>
                  <i className="fas fa-envelope"></i>
                </span>
                <span className={combineStyle([
                  active_style.icon,
                  active_style.isSmall,
                  active_style.isRight
                ])}>
                  <i className="fas fa-exclamation-triangle"></i>
                </span>
              </div>
              <p className={combineStyle([active_style.help, active_style.isDanger])}>This email is invalid</p>
            </div>



            <div className={active_style.field}>
              <label className={active_style.label}>Subject</label>
              <div className={active_style.control}>
                <div className={active_style.select}>
                  <select>
                    <option>Select dropdown</option>
                    <option>With options</option>
                  </select>
                </div>
              </div>
            </div>


            <div className={active_style.field}>
              <label className={active_style.label}>Message</label>
              <div className={active_style.control}>
                <textarea className={active_style.textarea} placeholder="Textarea"></textarea>
              </div>
            </div>



            <div className={active_style.field}>
              <div className={active_style.control}>
                <label className={active_style.checkbox}>
                  <input type="checkbox" />
                  I agree to the <a href="#">terms and conditions</a>
                </label>
              </div>
            </div>

            <div className={active_style.field}>
              <div className={active_style.control}>
                <label className={active_style.radio}>
                  <input type="radio" name="question" />
                  Yes
                </label>
                <label className={active_style.radio}>
                  <input type="radio" name="question" />
                  No
                </label>
              </div>
            </div>




        </div>
      </section>

    </>
  )
}

export default SettingsContent