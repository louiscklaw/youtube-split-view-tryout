import React from 'react'

// import './youtube-test-cell.css'
import style from '../scss/style.module.scss'
import ThemeContext from '../contexts/theme-context'
import { checkIsNotUndefined, combineStyle } from '../utils/mixins'

function YoutubeTestCell(props){
  let {vid, channel_title} = props

  let theme_context = React.useContext(ThemeContext)
  let active_style = checkIsNotUndefined(theme_context)
  ? theme_context.active_style
  : style

  return (
    <div className={active_style.youtubeVideoContainer}>
      <iframe
        src={`//www.youtube.com/embed/${vid}`}
        frameBorder="0"
        allowFullScreen
        className={active_style.video}
        />

      <div className={active_style.dragButtonContainer}>
        <div className={combineStyle([
          active_style.dragButton,
          active_style.button
        ])}>
          <i className="fas fa-arrows-alt"></i>
        </div>
      </div>

    </div>
  )
}

export default YoutubeTestCell
