import React from "react"
import { useContext, useState, useEffect } from "react"

const getStorageTheme = () => {
  let theme = "light-theme"
  if (typeof window !== "undefined") {
    if (localStorage.getItem("theme")) {
      theme = localStorage.getItem("theme")
    }
    return theme
  }
}

const ContextP = React.createContext()
const ContextProvider = ({ children }) => {
  const [lang, setLang] = useState("en-US")
  const [theme, setTheme] = useState(getStorageTheme())
  const [render, setRender] = useState(false)

  useEffect(() => {
    document.documentElement.className = theme
    localStorage.setItem("theme", theme)
    setRender(true)
  }, [theme])
  useEffect(() => {
    localStorage.setItem("lang", lang)
  }, [lang])
  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme(`dark-theme`)
    } else {
      setTheme("light-theme")
    }
  }
  const ruLang = () => {
    setLang(`ru`)
  }
  const enLang = () => {
    setLang(`en-US`)
  }
  console.log(theme)
  const [showSidebar, setShowSidebar] = useState(false)
  const openSidebar = () => {
    setShowSidebar(true)
  }
  const closeSidebar = () => {
    setShowSidebar(false)
  }
  return (
    <ContextP.Provider
      value={{
        lang,
        ruLang,
        enLang,
        showSidebar,
        openSidebar,
        closeSidebar,
        toggleTheme,
        theme,
        render,
      }}
    >
      {children}
    </ContextP.Provider>
  )
}

const useGlobalContext = () => {
  return useContext(ContextP)
}

export { ContextP, ContextProvider, useGlobalContext }
