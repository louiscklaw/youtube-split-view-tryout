import React from "react"
import _ from "lodash"

import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import TestLogin from '../components/test-login'

import CancelButton from '../components/buttons/cancel-button'
import CloseButton from '../components/buttons/cancel-button'
import SaveChangesButton from "../components/buttons/save-change-button"

import LoginForm from '../components/forms/login-form'
import SettingsForm from '../components/forms/settings_form'

import ModalContext from "../contexts/modal-context"
import ThemeContext from "../contexts/theme-context"

import ModalMixins from '../components/modals/modal_mixins'

function IndexPage(props){
  let { active_style } = React.useContext(ThemeContext)
  let { openLoginModal, openSettingsModal, openAnnouncementModal } = React.useContext(ModalContext)

  return (
    <Layout>

      <SEO title="Debug" />
      <ModalMixins />

      <Link to="/">Back</Link>

      <hr />
      <h3>test buttons</h3>

      <TestLogin />
      <CancelButton />
      <CloseButton />
      <SaveChangesButton />

      <hr />
      <h3>announcement modal</h3>
      <button className={active_style.button} onClick={openAnnouncementModal}>announcement</button>

      <hr />
      <h3>test forms</h3>
      <LoginForm />
      <button className={active_style.button} onClick={openLoginModal}>openLoginModal</button>

      <hr />
      <h3>settings forms</h3>
      <SettingsForm />
      <button className={active_style.button} onClick={openSettingsModal}>openSettingsModal</button>

    </Layout>
  )
}

export default IndexPage
