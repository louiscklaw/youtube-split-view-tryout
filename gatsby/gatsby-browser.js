import React from "react"

import { GlobalContextProvider } from '~contexts/global-context'
import { ThemeContextProvider } from '~contexts/theme-context'
import { ModalContextProvider } from '~contexts/modal-context'
import { FirebaseContextProvider } from '~contexts/firebase-context'
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
