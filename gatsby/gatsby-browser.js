import React from "react"

import { ThemeContextProvider } from "./src/contexts/theme-context"
import { GlobalContextProvider } from "./src/contexts/global-context"
import { ModalContextProvider } from "./src/contexts/modals-context"
import { FirebaseContextProvider } from "./src/contexts/firebase-context"
import { ProfileContextProvider } from "./src/contexts/profile-context"

export const wrapRootElement = ({ element }) => {
  return (
    <GlobalContextProvider>
      <ThemeContextProvider>
        <ModalContextProvider>
        <FirebaseContextProvider>
          {element}
        </FirebaseContextProvider>
        </ModalContextProvider>
      </ThemeContextProvider>
    </GlobalContextProvider>
  )
}
