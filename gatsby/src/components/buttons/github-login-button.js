import React from "react"
import FirebaseAuthContext from '../../contexts/firebase-auth-context'

function GithubLoginButton() {
  let { githubLogin } = React.useContext(FirebaseAuthContext)

  const handleGithubLoginOnClick = () => {
    githubLogin()
  }

  return (
    <>
      <button onClick={handleGithubLoginOnClick}>github login</button>
    </>
  )
}

export default GithubLoginButton
