import React from 'react'

import PreviewChannel from '../components/preview-channel'

function NarrowScreenRightPreview(){
  return(
    <>
    </>
  )
}

function NormalScreenRightPreview(){
  return(
    <>
      {
        _.range(7,16+1).map(idx => {
          return (
            <PreviewChannel placeholder={idx} />
          )
        })
      }
    </>
  )
}

function RightPreview(props){
  let {active_style, narrow_window} = props

  let [right_preview_canvas, setRightPreviewCanvas] = React.useState('')

  React.useEffect(()=>{
    if (narrow_window){
      setRightPreviewCanvas(<NarrowScreenRightPreview />)
    }else{
      setRightPreviewCanvas(<NormalScreenRightPreview />)
    }
  },[narrow_window])

  return(
    <div className={active_style.right}>
      <div className={active_style.rightPreviewChannel}>
        {right_preview_canvas}
      </div>
    </div>
  )
}

export default RightPreview
