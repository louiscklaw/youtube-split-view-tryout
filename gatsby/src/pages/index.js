import React from "react"
import _ from 'lodash'

import Layout from "../components/layout"
import SEO from "../components/seo"
import YoutubeCell from '../components/youtube-cell'
import MainChannel from "../components/main-channel"
import PreviewChannel from '../components/preview-channel'
import Footer from '../components/footer'

import AnnouncementModal from '../components/modals/announcement-modal'
import SettingsModal from '../components/modals/settings-modal'

import GlobalContext from "../contexts/global-context"

function IndexPage() {
  const announce_ref = React.useRef(null)
  const settings_ref = React.useRef(null)

  let {channel_list, active_style, narrow_window} = React.useContext(GlobalContext)

  let [boxA_pos, setBoxAPos] = React.useState('0')
  let [boxB_pos, setBoxBPos] = React.useState('1')
  let [boxC_pos, setBoxCPos] = React.useState('2')
  let [boxD_pos, setBoxDPos] = React.useState('3')
  let [boxE_pos, setBoxEPos] = React.useState('4')
  let [boxF_pos, setBoxFPos] = React.useState('5')
  let [boxG_pos, setBoxGPos] = React.useState('6')
  let [boxH_pos, setBoxHPos] = React.useState('7')
  let [boxI_pos, setBoxIPos] = React.useState('8')
  let [boxJ_pos, setBoxJPos] = React.useState('9')
  let [boxK_pos, setBoxKPos] = React.useState('10')
  let [boxL_pos, setBoxLPos] = React.useState('11')
  let [boxM_pos, setBoxMPos] = React.useState('12')
  let [boxN_pos, setBoxNPos] = React.useState('13')
  let [boxO_pos, setBoxOPos] = React.useState('14')
  let [boxP_pos, setBoxPPos] = React.useState('15')
  let [boxQ_pos, setBoxQPos] = React.useState('16')

  let box_pos_array = [
    [boxA_pos, setBoxAPos],
    [boxB_pos, setBoxBPos],
    [boxC_pos, setBoxCPos],
    [boxD_pos, setBoxDPos],
    [boxE_pos, setBoxEPos],
    [boxF_pos, setBoxFPos],
    [boxG_pos, setBoxGPos],
    [boxH_pos, setBoxHPos],
    [boxI_pos, setBoxIPos],
    [boxJ_pos, setBoxJPos],
    [boxK_pos, setBoxKPos],
    [boxL_pos, setBoxLPos],
    [boxM_pos, setBoxMPos],
    [boxN_pos, setBoxNPos],
    [boxO_pos, setBoxOPos],
    [boxP_pos, setBoxPPos],
    [boxQ_pos, setBoxQPos]
  ]

  let i = 0
  // let box_settings = {}
  // box_pos_array.forEach( box_pos => {
  //   box_settings[i++] = {
  //     box_pos: box_pos[0],
  //     v_id: `KGBv8oT5lwk`
  //   }
  // })

  let box_settings = {}

  Object.keys(channel_list).forEach(channel =>{
    let channel_info = channel_list[channel]
    box_settings[channel] = {
      box_pos: box_pos_array[channel][0],
      v_id: channel_info.v_id,
      video_title: channel_info.video_title
    }
  })

  React.useEffect(()=>{
    Object.keys(box_settings).forEach( channel_id => {
      let box_setting = box_settings[channel_id]
      let {box_pos} = box_setting
      let ele_box = getBoxById(box_pos)
      placeIntoPosition(ele_box)
    })
  })
  // console.log(box_settings)

  const paveNarrowScreenRightPreview = () => {
    // return _.range(7,9+1).map(idx => (<PreviewChannel placeholder={idx} />))
    return (
      <>
      </>
    )
  }

  const paveRightPreview = () => {
    return _.range(7,16+1).map(idx => (<PreviewChannel placeholder={idx} />))
  }

  const getBoxById = (position) => {
    return document.querySelector(`div[data-position="${position}"]`)
  }

  const setBoxPositionId = (ele, pos_id) => {
    console.log(ele, `to ${pos_id}`)
    ele.dataset.position = pos_id
  }

  const getPositioonFromEle = (ele) => {
    return ele.getAttribute('data-position')
  }

  const getPlaceholderById = (placeholder) => {
    return document.querySelector(`div[data-placeholder="${placeholder}"]`)
  }

  const placeIntoPosition = (ele_video) => {
    let position_of_ele_video = ele_video.getAttribute('data-position')
    let ele_placeholder = getPlaceholderById(position_of_ele_video)

    ele_video.style.position = "fixed"
    ele_video.style.top = `${ele_placeholder.offsetTop}px`
    ele_video.style.left = `${ele_placeholder.offsetLeft}px`
    ele_video.style.height = `${ele_placeholder.clientHeight}px`
    ele_video.style.width = `${ele_placeholder.clientWidth}px`
  }

  const swapPosition = (eleA, eleB) => {
    let origional_pos_A = getPositioonFromEle(eleA)
    let origional_pos_B = getPositioonFromEle(eleB)

  }

  const handleOnClick = (e) => {
    if (e.target.hasAttribute('data-position'))
    {
      // console.log(e.target)
      // console.log(e.target.hasAttribute('data-position'))
      let clicked_position = getPositioonFromEle(e.target)
      // getClickedSetMethod
      let clickedSetMethod = box_pos_array.filter(x => x[0] == clicked_position)[0][1]

      // getMainSetMethod
      let mainSetMethod = box_pos_array.filter(x => x[0] == '0')[0][1]

      clickedSetMethod('0')
      mainSetMethod(clicked_position)

    }

  }

  const handleBackgroundClick = () => {

  }

  const handleCloseButtonOnClick = () => {
    announce_ref.current.classList.remove(active_style.isActive)
  }

  return(
    <Layout>
      <SEO title="Home" />


      <AnnouncementModal
        modal_ref={announce_ref}
        title="Announcement title"
        backgroundClick={handleBackgroundClick}
        closeButtonClick={handleCloseButtonOnClick}
      >
        <p>hello announcement</p>
      </AnnouncementModal>


      <SettingsModal />

      <div className={active_style.wholeCanvas}>
        <div className={active_style.left}>
          <MainChannel />
          <div className={active_style.bottomPreviewChannel}>
            {_.range(1,6+1).map( idx => {
              return(
                <PreviewChannel placeholder={idx} />
              )
            })}
          </div>

        </div>
        <div className={active_style.right}>
          <div className={active_style.rightPreviewChannel}>
            {
              narrow_window ? paveNarrowScreenRightPreview(): paveRightPreview()
            }
          </div>
        </div>
      </div>

      <Footer />

      {
        Object.keys(box_settings).map( channel_id => {
          let box_setting = box_settings[channel_id]

          let {box_pos} = box_setting

          return(
            <div
              className={active_style.box1}
              data-position={box_pos}
              onClick={(e)=>handleOnClick(e)}
            >
              <YoutubeCell {...box_setting} key={`youtube_cell_${box_pos}`}/>
            </div>
          )

        })
      }

    </Layout>
  )
}

export default IndexPage
