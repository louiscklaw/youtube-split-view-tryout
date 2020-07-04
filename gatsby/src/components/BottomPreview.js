import React from 'react'
import ThemeContext from '../contexts/theme-context'

function BottomPreview(props){
  const {active_style} = React.useContext(ThemeContext)

  return(
    <>
      <div className={active_style.bottomPreviewChannel}>
        {_.range(1, 6 + 1).map(idx => {
          return <PreviewChannel placeholder={idx} />
        })}
      </div>
    </>
  )
}

export default BottomPreview
