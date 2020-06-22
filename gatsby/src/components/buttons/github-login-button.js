import React from "react"
import {githubLogin} from '../../utils/firebase'

function GithubLoginButton() {

  const handleGithubLoginOnClick = () => {
    console.log("github login onClick")
    githubLogin()
  }

  return (
    <>
      <button onClick={handleGithubLoginOnClick}>github login</button>
    </>
  )
}

export default GithubLoginButton
