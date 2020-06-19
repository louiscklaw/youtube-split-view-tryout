import React from 'react'

import './static/plyr.css';

import {GlobalContextProvider} from './src/contexts/global-context'
import {ModalContextProvider} from './src/contexts/modals-context'

import { FirebaseContextProvider } from "./src/contexts/firebase-context"


export const wrapRootElement = ({ element }) => {
  return (
    <GlobalContextProvider>
      <ModalContextProvider>
        <FirebaseContextProvider>
          {element}
        </FirebaseContextProvider>
      </ModalContextProvider>
    </GlobalContextProvider>
  )
};
