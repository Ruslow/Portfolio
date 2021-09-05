import React from "react"
import Links from "../components/Links"
import SocialIcons from "./Social-icons"
import { FaTimes } from "@react-icons/all-files/fa/FaTimes"
import styled from "styled-components"
import { useGlobalContext } from "./Context"
import Language from "./Language"
import Theme from "./Theme"
const Sidebar = () => {
  const { showSidebar, closeSidebar } = useGlobalContext()
  return (
    <Wrapper className={!showSidebar ? "close-sidebar" : null}>
      <div className="go">
        <Language />
        <Theme />
        <FaTimes onClick={closeSidebar} className="close-btn" />
      </div>
      <div>
        <Links />
        <SocialIcons />
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.aside`
  background-color: var(--sidebar-col);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
  z-index: 100;
  text-align: center;
  transition: 0.3s linear;
  .toggle-theme {
    background: transparent;
    outline: none;
    border: none;
    font-size: 3rem;
    cursor: pointer;
    .sun {
      color: #f9d71c;
    }
  }
  .go {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 50px;
    width: 100%;
    padding: 0 4rem;
  }
  select {
    background-color: #bb2525;
  }
  .close-btn {
    font-size: 4rem;
    color: #bb2525;
    &:hover {
      cursor: pointer;
    }
  }
  a {
    color: #617d98;
  }
  .slidebar-links {
    font-size: 3.6rem;
    text-transform: capitalize;
    letter-spacing: 2px;
    margin-bottom: 2rem;
    line-height: 1.7;
  }

  .social-icons {
    font-size: 4rem;
    gap: 1rem;
    a {
      color: #617d98;
    }
  }
`
export default Sidebar
