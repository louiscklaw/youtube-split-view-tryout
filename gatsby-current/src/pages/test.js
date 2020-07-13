import React from "react"
import _ from "lodash"
import {LOGGED_OUT} from '~constants/login'

import Layout from "~components/layout"
import ChannelType from '~components/modals/settings-modal/channel-type'
import ChannelVid from '~components/modals/settings-modal/channel-vid'
import ChannelTitle from '~components/modals/settings-modal/channel-title'

function TestPage(props){
  return(
    <Layout>
      <div>
        Test Page
        <ChannelType />
      </div>

      <div>
        channel vid
        <ChannelVid />
      </div>

      <div>
        channel title
        <ChannelTitle />
      </div>

    </Layout>
  )
}

export default TestPage