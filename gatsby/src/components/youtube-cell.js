import React from "react"

import {checkDataReady} from "../utils/mixins"

function YoutubeCell(props) {
  let { box_setting } = props
  let [youtube_cell_canvas, setYoutubeCellCanvas] = React.useState("loading")

  React.useEffect(()=>{

    if (checkDataReady(box_setting)) {
      setYoutubeCellCanvas(
        <iframe
          title="youtube play box"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/sx4GK8XYeZE"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      )
    }else{
      console.log("box_setting", box_setting)
      setYoutubeCellCanvas(<>loading</>)
    }

  },[box_setting])

  return <>{youtube_cell_canvas}</>
}

export default YoutubeCell
