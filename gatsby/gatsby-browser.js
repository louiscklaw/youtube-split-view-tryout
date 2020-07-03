import React from "react"

import { GlobalContextProvider } from "./src/contexts/global-context"
import { ThemeContextProvider } from "./src/contexts/theme-context"
import { ModalContextProvider } from './src/contexts/modal-context'


export const wrapRootElement = ({ element }) => {
  return (
    <GlobalContextProvider>
      <ThemeContextProvider>
        <ModalContextProvider>
          {element}
        </ModalContextProvider>
      </ThemeContextProvider>
    </GlobalContextProvider>
  )
}
