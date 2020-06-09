import React from 'react'

import './static/plyr.css';

import {GlobalContextProvider} from './src/contexts/global-context'

export const wrapRootElement = ({ element }) => {
  return (
    <GlobalContextProvider>
      {element}
    </GlobalContextProvider>
  )
};