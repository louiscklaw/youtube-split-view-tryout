import React from "react"
import _ from "lodash"

import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import ThemeContext from '../contexts/theme-context'
import ModalContext from '../contexts/modal-context'

import Footer from '../components/footer'
import Sidebar from '../components/sidebar'

import TestModal from '../components/modals/test-modal'
import AnnouncementModal from '../components/modals/announcement-modal'

function IndexPage()
{
  const {active_style} = React.useContext(ThemeContext)
  const {openTestModal} = React.useContext(ModalContext)

  return (
    <Layout>
      <SEO title="Home" />

      <AnnouncementModal />
      <TestModal />

      <h1 className={active_style.test}>helloworld</h1>

      <button className={active_style.button} onClick={openTestModal}>open modal in index.js</button>


      <Sidebar />
      <Footer />

    </Layout>
  )
}

export default IndexPage
