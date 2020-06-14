import React from 'react'

function TestModal(props){
  const {ref} = props
  return(
    <div className="modal" ref={ref}>
      <div className="modal-background"></div>
      <div className="modal-content">
        helloworld
      </div>
      <button className="modal-close is-large" aria-label="close"></button>
    </div>
  )
}

export default TestModal
