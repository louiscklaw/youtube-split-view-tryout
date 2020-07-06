import React from 'react'

import LoadingPage from '~components/loading'

import MainCanvas from './main-canvas'
import Sidebar from '~components/sidebar'
import Footer from '~components/footer'

function VideoPage(props){
  return(
    <>
      <MainCanvas />
      <Sidebar />
      <Footer />
    </>
  )
}

export default VideoPage
