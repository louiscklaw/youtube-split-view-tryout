import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import style from './index.module.scss'

import YoutubeCell from '../components/youtube-cell'
import MainChannel from "../components/main-channel"
import PreviewChannel from '../components/preview-channel'

import GlobalContext from "../contexts/global-context"

function IndexPage() {
  let {channel_list} = React.useContext(GlobalContext)

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
      v_id: channel_info.v_id
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
  console.log(box_settings)

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
      console.log(e.target)
      console.log(e.target.hasAttribute('data-position'))
      let clicked_position = getPositioonFromEle(e.target)
      // getClickedSetMethod
      let clickedSetMethod = box_pos_array.filter(x => x[0] == clicked_position)[0][1]

      // getMainSetMethod
      let mainSetMethod = box_pos_array.filter(x => x[0] == '0')[0][1]

      clickedSetMethod('0')
      mainSetMethod(clicked_position)

    }

  }

  return(
    <Layout>
      <SEO title="Home" />
      <div className={style.wholeCanvas}>
        <div className={style.left}>
          <MainChannel />
          <div className={style.bottomPreviewChannel}>
            <PreviewChannel placeholder="1"/>
            <PreviewChannel placeholder="2"/>
            <PreviewChannel placeholder="3"/>
            <PreviewChannel placeholder="4"/>
            <PreviewChannel placeholder="5"/>
            <PreviewChannel placeholder="6"/>
          </div>

        </div>
        <div className={style.right}>
          <div className={style.rightPreviewChannel}>
            <PreviewChannel placeholder="7"/>
            <PreviewChannel placeholder="8"/>
            <PreviewChannel placeholder="9"/>
            <PreviewChannel placeholder="10"/>
            <PreviewChannel placeholder="11"/>
            <PreviewChannel placeholder="12"/>
            <PreviewChannel placeholder="13"/>
            <PreviewChannel placeholder="14"/>
            <PreviewChannel placeholder="15"/>
            <PreviewChannel placeholder="16"/>

          </div>
        </div>
      </div>

      {
        Object.keys(box_settings).map( channel_id => {
          let box_setting = box_settings[channel_id]
          let {box_pos, v_id} = box_setting
          return(
            <div className={style.box1} data-position={box_pos} onClick={(e)=>handleOnClick(e)} >
              <YoutubeCell v_id={v_id} pos_id={box_pos}/>
            </div>
          )
        })
      }

    </Layout>
  )
}

export default IndexPage
