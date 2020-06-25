import React from 'react'

import './youtube-test-cell.css'

function YoutubeTestCell(props){
  let {vid} = props

  return (
    <div>
      <iframe
        src={`//www.youtube.com/embed/${vid}`}
        frameBorder="0"
        allowFullScreen
        className="video"
        />

      <div className="handler-drag">
        drag
        {JSON.stringify(props)}
      </div>
    </div>
  )
}

export default YoutubeTestCell
