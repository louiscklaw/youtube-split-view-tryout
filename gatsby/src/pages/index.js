import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import style from './index.module.scss'

function IndexPage() {
  let [boxA_pos, setBoxAPos] = React.useState('0')
  let [boxB_pos, setBoxBPos] = React.useState('1')
  let [boxC_pos, setBoxCPos] = React.useState('2')
  let box_pos_array = [
    [boxA_pos, setBoxAPos],
    [boxB_pos, setBoxBPos],
    [boxC_pos, setBoxCPos]
  ]


  React.useEffect(()=>{
    let ele_boxA = getBoxById(boxA_pos)
    let ele_boxB = getBoxById(boxB_pos)
    let ele_boxC = getBoxById(boxC_pos)

    placeIntoPosition(ele_boxA)
    placeIntoPosition(ele_boxB)
    placeIntoPosition(ele_boxC)

  })

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
    let clicked_position = getPositioonFromEle(e.target)
    // getClickedSetMethod
    let clickedSetMethod = box_pos_array.filter(x => x[0] == clicked_position)[0][1]

    // getMainSetMethod
    let mainSetMethod = box_pos_array.filter(x => x[0] == '0')[0][1]


    clickedSetMethod('0')
    mainSetMethod(clicked_position)


    // if (box_pos_array[0][0] == '0') {
    //   console.log('boxA_pos', boxA_pos, box_pos_array[0][0])
    //   console.log('boxB_pos', boxB_pos, box_pos_array[1][0])
    //   box_pos_array[0][1]("1")
    //   box_pos_array[1][1]("0")

    //   // setBoxAPos("1")
    //   // setBoxBPos("0")
    // }else{
    //   console.log('boxA_pos', boxA_pos, box_pos_array[0][0])
    //   console.log('boxB_pos', boxB_pos, box_pos_array[1][0])
    //   box_pos_array[0][1]("0")
    //   box_pos_array[1][1]("1")
    //   // setBoxAPos("0")
    //   // setBoxBPos("1")
    // }


  }

  return(
    <Layout>
      <SEO title="Home" />
      <div className={style.wholeCanvas}>
        <div className={style.left}>
          <div className={style.mainChannel} data-placeholder="0">
            main channel
          </div>
          <div className={style.bottomPreviewChannel}>
            <div className={style.previewChannel} data-placeholder="1">
              previewChannel
            </div>
            <div className={style.previewChannel} data-placeholder="2">
              previewChannel
            </div>
            <div className={style.previewChannel}>
              previewChannel
            </div>
            <div className={style.previewChannel}>
              previewChannel
            </div>
            <div className={style.previewChannel}>
              previewChannel
            </div>
            <div className={style.previewChannel}>
              previewChannel
            </div>
          </div>

        </div>
        <div className={style.right}>
          <div className={style.rightPreviewChannel}>
            <div className={style.previewChannel}>
              previewChannel
            </div>
            <div className={style.previewChannel}>
              previewChannel
            </div>
            <div className={style.previewChannel}>
              previewChannel
            </div>
            <div className={style.previewChannel}>
              previewChannel
            </div>
            <div className={style.previewChannel}>
              previewChannel
            </div>

            <div className={style.previewChannel}>
              previewChannel
            </div>
            <div className={style.previewChannel}>
              previewChannel
            </div>
            <div className={style.previewChannel}>
              previewChannel
            </div>
            <div className={style.previewChannel}>
              previewChannel
            </div>
            <div className={style.previewChannel}>
              previewChannel
            </div>


          </div>
        </div>
      </div>
      <div className={style.box1} data-position={boxA_pos} onClick={(e)=>handleOnClick(e)} >box A</div>
      <div className={style.box2} data-position={boxB_pos} onClick={(e)=>handleOnClick(e)} >box B</div>
      <div className={style.box3} data-position={boxC_pos} onClick={(e)=>handleOnClick(e)} >box C</div>
    </Layout>
  )
}

export default IndexPage
