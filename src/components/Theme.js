import React from "react"
import { useGlobalContext } from "./Context"
import { FaSun } from "@react-icons/all-files/fa/FaSun"
import { FaMoon } from "@react-icons/all-files/fa/FaMoon"
import styled from "styled-components"
const Theme = () => {
  const { theme, toggleTheme, render } = useGlobalContext()
  return (
    <>
      {render &&
        (theme === "dark-theme" ? (
          <button className="toggle-theme" type="button" onClick={toggleTheme}>
            <FaSun className="sun" />
          </button>
        ) : (
          <button className="toggle-theme" type="button" onClick={toggleTheme}>
            <FaMoon className="moon" />
          </button>
        ))}
    </>
  )
}

export default Theme
