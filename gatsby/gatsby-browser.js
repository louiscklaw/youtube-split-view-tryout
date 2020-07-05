import React from "react"

import { GlobalContextProvider } from "./src/contexts/global-context"
import { ThemeContextProvider } from "./src/contexts/theme-context"
import { ModalContextProvider } from './src/contexts/modal-context'
import { FirebaseContextProvider } from './src/contexts/firebase-context'
import { ProfileContextProvider } from '~contexts/profile-context'


export const wrapRootElement = ({ element }) => {
  return (
    <GlobalContextProvider>
      <ThemeContextProvider>
        <ModalContextProvider>
          <FirebaseContextProvider>
            <ProfileContextProvider>
              {element}
            </ProfileContextProvider>
          </FirebaseContextProvider>
        </ModalContextProvider>
      </ThemeContextProvider>
    </GlobalContextProvider>
  )
}
