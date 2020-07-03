import React from 'react'

import style from "../scss/style.module.scss"
import ThemeContext from '../contexts/theme-context'
import { checkIsNotUndefined, isDefined, combineStyle } from "../utils/mixins"

function SideBar(props){
  let theme_context = React.useContext(ThemeContext)
  let active_style = checkIsNotUndefined(theme_context)
    ? theme_context.active_style
    : style

  return(
    <>
      <div className={active_style.sidebarContainer}>


      <div className={combineStyle([
          active_style.sidebarButton,
          active_style.button
          ])}>
          <i class="fas fa-sign-in-alt"></i>
        </div>


        <div className={combineStyle([
          active_style.sidebarButton,
          active_style.button
          ])}>
          <i className="fas fa-cogs"></i>
        </div>

        <div className={combineStyle([
          active_style.sidebarButton,
          active_style.button
          ])}>
          <i class="fas fa-bullhorn"></i>
        </div>



      </div>
    </>
  )
}

export default SideBar