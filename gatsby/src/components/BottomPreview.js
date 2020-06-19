import React from 'react'
import PreviewChannel from '../components/preview-channel'

function BottomPreview(props){
  let {active_style} = props

  return(
    <>
      <div className={active_style.bottomPreviewChannel}>
        {
          _.range(1,6+1).map( idx => {
            return(
              <PreviewChannel placeholder={idx} />
            )
          })
        }
      </div>
    </>
  )
}


export default BottomPreview