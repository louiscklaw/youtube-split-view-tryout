import React from 'react'
import _ from "lodash"
import {checkIsNotUndefined, getKeys, checkContextReady, isDefined} from '~mixins/general'

import { Responsive, WidthProvider } from 'react-grid-layout'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'

import GlobalContext from '../contexts/global-context'
import ThemeContext from '../contexts/theme-context'

import ProfileContext from '../contexts/profile-context'
import {default_layout_settings} from '../constants/default_profile'

function VideoBody(props){
  let [is_loading, setIsLoading] = React.useState(false)
  let [test_profile, setTestProfile] = React.useState({})

  let {current_profile} = React.useContext(ProfileContext)

  return(
    <>
      video body
    </>
  )
}

export default VideoBody
