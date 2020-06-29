import React from 'react'

// import './youtube-test-cell.css'
import style from '../scss/style.module.scss'
import ThemeContext from '../contexts/theme-context'
import { checkIsNotUndefined } from '../utils/mixins'

function YoutubeTestCell(props){
  let {vid, channel_title} = props

  let theme_context = React.useContext(ThemeContext)
  let active_style = checkIsNotUndefined(theme_context)
  ? theme_context.active_style
  : style

  return (
    <div>
      {/*
      <iframe
        src={`//www.youtube.com/embed/${vid}`}
        frameBorder="0"
        allowFullScreen
        className="video"
        />
      */}

        <div className={active_style.handlerDrag}>
          drag {channel_title}
        </div>

    </div>
  )
}

export default YoutubeTestCell
