import React from 'react'
import { combineStyle } from '../utils/mixins'

import ThemeContext from '../contexts/theme-context'

function YoutubeTestCell(props){
  let {active_style} = React.useContext(ThemeContext)

  return(
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
