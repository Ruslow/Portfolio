import React from "react"
import { useContext, useState } from "react"

const ContextP = React.createContext()
const ContextProvider = ({ children }) => {
  const [lang, setLang] = useState("en-US")
  const ruLang = () => {
    setLang(`ru`)
  }
  const enLang = () => {
    setLang(`en-US`)
  }

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
