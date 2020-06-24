import React from 'react'

import './youtube-test-cell.css'

function YoutubeTestCell(props){

  return (
    <div>
      <iframe
        src="//www.youtube.com/embed/yCOY82UdFrw"
        frameborder="0"
        allowfullscreen
        class="video"
        />

      <div className="handler-drag">
        drag
      </div>

    </div>
  )
}

export default YoutubeTestCell
