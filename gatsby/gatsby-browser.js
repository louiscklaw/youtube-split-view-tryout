import React from 'react'

import './static/plyr.css';

import {GlobalContextProvider} from './src/contexts/global-context'
import {ModalContextProvider} from './src/contexts/modals-context'

export const wrapRootElement = ({ element }) => {
  return (
    <GlobalContextProvider>
      <ModalContextProvider>
        {element}
      </ModalContextProvider>
    </GlobalContextProvider>
  )
};
