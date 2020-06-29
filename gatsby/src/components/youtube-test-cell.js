import React from 'react'

import './youtube-test-cell.css'

function YoutubeTestCell(props){
  let {vid, channel_title} = props


  return (
    <div>
      <div>
        {channel_title}
      </div>

      <iframe
        src={`//www.youtube.com/embed/${vid}`}
        frameBorder="0"
        allowFullScreen
        className="video"
        />

      <div className="handler-drag">
        drag
      </div>
    </div>
  )
}

export default YoutubeTestCell
