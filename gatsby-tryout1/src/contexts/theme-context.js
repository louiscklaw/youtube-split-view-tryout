import React from "react"

import style from "../scss/style.module.scss"
import style_narrow from "../scss/style_narrow.module.scss"

import config from "../config"
const { narrow_screen_checkpoint } = config

let ThemeContext = React.createContext()

function ThemeContextProvider(props) {
  let [active_style, setActiveStyle] = React.useState(style)
  let [narrow_window, setNarrowWindow] = React.useState(false)

  const checkNarrowWindow = windowWidth => {
    return windowWidth < narrow_screen_checkpoint
  }

  const updateDimensions = () => {
    let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0
    let windowHeight = typeof window !== "undefined" ? window.innerHeight : 0

    let narrow_window = checkNarrowWindow(windowWidth)
    let result_style = narrow_window ? style_narrow : style

    setNarrowWindow(narrow_window)
    setActiveStyle(result_style)
  }

  React.useEffect(() => {
    updateDimensions()
    window.addEventListener("resize", updateDimensions)
  })

  return (
    <ThemeContext.Provider
      value={{
        active_style,
        narrow_window,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext
export { ThemeContextProvider }
