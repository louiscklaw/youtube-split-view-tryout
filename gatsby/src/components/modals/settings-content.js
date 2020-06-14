import React from 'react'
import GlobalContext from '../../contexts/global-context'

function SettingsContent(){
  const {active_style} = React.useContext(GlobalContext)

  return(
    <>
      <section className={active_style.section}>
        <div className={active_style.container}>
          <form>
            <div className={active_style.field}>
              <label className={active_style.label}>Name</label>
              <div className={active_style.control}>
                <input className={active_style.input} type="text" placeholder="Text input" />
              </div>
            </div>




            <div className={active_style.field}>
              <label className={active_style.label}>Username</label>
              <div className={[
                active_style.control,
                active_style.hasIconsLeft,
                active_style.hasIconsRight
              ].join(' ')}>
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
                  active_style.isLeft
                ].join(" ")} >
                  <i className="fas fa-check"></i>
                </span>
              </div>
              <p className={[ active_style.help, active_style.isSuccess ].join(" ")}>
                This username is available
              </p>
            </div>





          </form>
        </div>
      </section>

    </>
  )
}

export default SettingsContent