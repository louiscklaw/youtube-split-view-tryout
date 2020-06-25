import React from 'react'

import './youtube-test-cell.css'

function YoutubeTestCell(props){
  let {vid} = props

  return (
    <div>
      <iframe
        src={`//www.youtube.com/embed/${vid}`}
        frameborder="0"
        allowfullscreen
        class="video"
        />

      <div className="handler-drag">
        drag
        {JSON.stringify(props)}
      </div>
    </div>
  )
}

export default YoutubeTestCell
