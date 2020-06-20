import React from 'react'
import FirebaseMixinsContext from '../../contexts/firebase-mixins'

function GithubLoginButton(){
  let firebase_mixins_context = React.useContext(FirebaseMixinsContext)

  let {githubLogin} = firebase_mixins_context

  const handleGithubLoginOnClick = () => {
    console.log('github login onClick')
    githubLogin()
  }

  return(
    <>
      <button onClick={handleGithubLoginOnClick}>github login</button>
    </>
  )
}

export default GithubLoginButton