import React from 'react'

function YoutubeCell(props){
  React.useEffect(()=>{
    console.log(props)
  })

  let {v_id} = props
  let v_src = `https://www.youtube.com/embed/${v_id}`

  let [canvas, setCanvas] = React.useState('loading')

  React.useEffect(()=>{
    setCanvas((
      <pre>
        {JSON.stringify(props, null, 2)}
      </pre>
    ))
  })

  return(
    <>
      {canvas}
    </>
  )
}

export default YoutubeCell
