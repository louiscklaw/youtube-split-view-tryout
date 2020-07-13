import React from 'react'
import { useForm } from "react-hook-form";

function TestSettingsModal(props){
  const { register, handleSubmit } = useForm()

  const onSubmit = data => console.log(data);

  const handleChannelTypeChange = (e) =>{
    console.log(e.target.value)
  }

  return(
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <select name={'test_select'} onChange={handleChannelTypeChange} defaultValue={'youtube4'} ref={props.reg}>
          <option value="rthk">rthk</option>
          <option value="youtube0">youtube0</option>
          <option value="youtube1">youtube1</option>
          <option value="youtube2">youtube2</option>
          <option value="youtube3">youtube3</option>
          <option value="youtube4">youtube4</option>
          <option value="youtube5">youtube5</option>
          <option value="youtube6">youtube6</option>
        </select>
        <input type="submit" />
      </form>
    </>
  )
}

export default TestSettingsModal