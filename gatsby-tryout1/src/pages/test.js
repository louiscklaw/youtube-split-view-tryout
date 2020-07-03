// import React from "react"

// import ProfileContext from '../contexts/profile-context'


// let channel_setting= [{
//   channel_title:"",
//   channel_type:"rthk",
//   channel_vid:"tlvF5"
// }]
// let layout = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

// let test_settings = { channel_setting,  layout}
// let current_profile = test_settings

// let profile_context = React.useContext(ProfileContext)

// function TestPage() {
//   if (checkContextReady(profile_context)){
//     let {updateCurrentProfileAndSaveToFirebase, packProfile} = profile_context

//     const testButton = () => {
//       updateCurrentProfileAndSaveToFirebase(
//         packProfile(current_profile,'layout', layout)
//       )
//       console.log(test_settings)
//     }
//   }

//   return (
//     <>
//       <button onClick={testButton}>test button</button>
//     </>
//   )
// }

// export default TestPage

import React from 'react'

function TestPage(props){
  return(
    <>
      Testpage
    </>
  )
}

export default TestPage
