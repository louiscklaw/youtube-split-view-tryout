import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import YoutubeTile from '../components/youtube-tile'

import DBContext from '../contexts/db-context'


function YoutubeTiles(user_info){
  let channel_list = user_info.channel_list
  if (typeof(channel_list) == 'undefined' || channel_list.length < 1){
    return(
      <>
        loading
      </>
    )
  }else{

    return(
      <>
        {
          channel_list.map( channel => {
            let url = channel.video_url
            let title = channel.video_title
            return(
              <YoutubeTile
                key={title}
                videoSrcURL={channel_list[0].video_url}
                videoTitle={channel_list[0].video_title}
              ></YoutubeTile>
            )
          })
        }
      </>
    )
  }

}

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
    <Layout>
      <SEO title="Home" />
      <YoutubeTiles channel_list={channel_list}></YoutubeTiles>

    </Layout>
  )
}

export default IndexPage
