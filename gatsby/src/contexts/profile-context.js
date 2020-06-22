import React from "react"

let ProfileContext = React.createContext()

function ProfileContextProvider(props) {
  const profileHelloworld = () => {
    console.log("profile helloworld")
  }

  const loadProfile = () => {}

  const saveProfile = () => {}

  return (
    <ProfileContext.Provider
      value={{
        profileHelloworld,
        loadProfile,
        saveProfile,
      }}
    >
      {props.children}
    </ProfileContext.Provider>
  )
}

export default ProfileContext
export { ProfileContextProvider }
