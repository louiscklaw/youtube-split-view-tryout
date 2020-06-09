import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import YoutubeTiles from '../components/youtube-tiles'

import DBContext from '../contexts/db-context'

function IndexPage() {
  const {getDocument}= React.useContext(DBContext)
  const [channel_list, setChannelList] = React.useState()

  React.useEffect( ()=>{
    async function testHelloworld(){
      let fetch_channel_list = await getDocument('channels')
      setChannelList(fetch_channel_list)
    }
    testHelloworld()
  },[])

  return(
    <>
      <Layout>
        <SEO title="Home" />

        <YoutubeTiles channel_list={channel_list}></YoutubeTiles>

      </Layout>
    </>
  )

}



export default IndexPage
