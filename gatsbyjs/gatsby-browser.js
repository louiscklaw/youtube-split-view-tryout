import React from "react"

// import { ThemeProvider } from "./src/context/ThemeContext"
import {DBContextProvider} from './src/contexts/db-context'

export const wrapRootElement = ({ element }) => (
  <DBContextProvider>
    {element}
  </DBContextProvider>
)