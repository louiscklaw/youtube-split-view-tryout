import React from "react"
import _ from "lodash"
import {LOGGED_OUT} from '../constants/login'

import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import ModalMixins from '../components/modals/modal_mixins'

import FirebaseAuthContext from '../contexts/firebase-auth-context'

import LoginPage from '../components/login-page'
import VideoPage from '../components/video-page'

function IndexPage() {
  let {user_info} = React.useContext(FirebaseAuthContext)


  console.log('index.js','user_info', user_info)

  return (
    <Layout>
      <SEO title="Youtube split viewer" />

      <ToastContainer />

      <ModalMixins />

      {user_info.status == LOGGED_OUT ? <LoginPage /> : <VideoPage />}

    </Layout>
  )
}

export default IndexPage
