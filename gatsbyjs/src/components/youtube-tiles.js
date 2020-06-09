import React from 'react'

import YoutubeTile from './youtube-tile'

function YoutubeTiles(user_info){
  let channel_list = user_info.channel_list
  if (typeof(channel_list) == 'undefined' || channel_list.length < 1){
    return(
      <>
        loading
      </>
    )
  }else{

    return(
      <>
        {
          channel_list.map( channel => {
            let url = channel.video_url
            let title = channel.video_title
            return(
              <YoutubeTile
                key={title}
                videoSrcURL={channel_list[0].video_url}
                videoTitle={channel_list[0].video_title}
              ></YoutubeTile>
            )
          })
        }
      </>
    )
  }

}

export default YoutubeTiles