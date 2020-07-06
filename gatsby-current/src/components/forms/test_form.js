import React from 'react'
import { useForm } from "react-hook-form";

import ResetButton from '../buttons/reset-button'

function Loading(props){
  return(
    <>
      Loading
    </>
  )
}

function MainForm(props){

  let {test_default_value} = props
  const { register, handleSubmit, watch, errors, reset } = useForm({
    defaultValues: test_default_value
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  return(
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="firstName" ref={register} />

        <input type="button" onClick={() => reset({ firstName: "bill" }) } value="reset button"/>

      </form>
    </>
  )
}

function TestForm(props){
  let [is_loading, setIsLoading] = React.useState(true)
  let {test_default_value} = props

  React.useEffect(()=>{
    if (Object.keys(test_default_value).length > 0){
      setIsLoading(false)
    }else{
      setIsLoading(true)
    }
  },[test_default_value])

  return(
    <>
      { is_loading? <Loading /> : <MainForm test_default_value={ test_default_value } /> }
    </>
  )
}

export default TestForm