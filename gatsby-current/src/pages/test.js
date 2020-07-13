import React from 'react'
import { useForm } from "react-hook-form";

import TestSettingsModal from '../components/modals/test-settings-modal'

function TestPage(props){
  const { register, handleSubmit } = useForm()

  const onSubmit = data => console.log(data);

  return(
    <>
      <TestSettingsModal />
    </>
  )
}

export default TestPage