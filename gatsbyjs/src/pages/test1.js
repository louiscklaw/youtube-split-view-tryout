import React from 'react'
// import { Button } from "@chakra-ui/core";

import MainYoutube from '../components/main-youtube'
import BottomChannelList from '../components/bottom-channel-list'
import SideChannelList from '../components/side-channel-list'

import style from './test1.module.scss'

function Test1(){
  return(
    <div className={style.mainCanvas}>

      <div className={style.mainRow}>
        <div className={style.mainColumn}>
          <MainYoutube />
          <BottomChannelList />
        </div>
        <SideChannelList />
      </div>
    </div>
  )
}

export default Test1