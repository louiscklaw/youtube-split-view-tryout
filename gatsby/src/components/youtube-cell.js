import React from 'react'

function YoutubeCell(props){
  React.useEffect(()=>{
    console.log('youtube cell logging test')
  })
  return(
    <pre>
      {JSON.stringify(props, null, 2)}
    </pre>
  )
}

export default YoutubeCell
