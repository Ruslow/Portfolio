import React from "react"
import styled from "styled-components"
import logo from "../assets/images/logoR.png"
import Links from "../components/Links"
import { Link } from "gatsby"
import { FiMenu } from "@react-icons/all-files/fi/FiMenu"

import { useGlobalContext } from "./Context"
import Language from "./Language"
import Theme from "./Theme"

const Navbar = () => {
  const { openSidebar, render, theme } = useGlobalContext()

  return (
    <Wrapper>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img
              className={`${theme === "dark-theme" ? "logo rot" : "logo"}`}
              src={logo}
              alt=""
            />
          </Link>
          <FiMenu onClick={openSidebar} className="menu-icon" />
        </div>
        <Links />
        <Theme />
        <Language />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  padding: 1rem 0;
  position: absolute;
  font-size: 1.6rem;
  width: 100%;

  .nav-link {
    font-family: Arial, Helvetica, sans-serif;
    color: var(--text-col);
    position: relative;
    transition: 0.3s;
    letter-spacing: 2px;
  }
  .nav-link:hover {
    color: var(--primary-color);
  }
  select {
    display: none;
  }
  .nav-link:hover::after,
  .active-link::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 5px;
    background-color: var(--primary-color);
    bottom: -7px;
    left: 0;
  }
  .active-link {
    color: var(--primary-color);
  }

  .nav-center {
    width: 95vw;
    margin: 0 auto;
    max-width: 1370px;
    .toggle-theme {
      display: none;
      background: transparent;
      outline: none;
      border: none;
      font-size: 3rem;
      cursor: pointer;
      .sun {
        color: #f9d71c;
      }
    }
  }
  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      width: 150px;
    }
    .rot {
      background-color: #dae2ec;
      border-radius: 30px;
    }
    .menu-icon {
      font-size: 3.8rem;
      color: var(--primary-color);
      &:hover {
        cursor: pointer;
      }
    }
  }
  .nav-links {
    display: none;
  }
  @media (min-width: 768px) {
    select {
      display: block;
    }
    .nav-center {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .toggle-theme {
        display: block;
      }
    }
    .nav-header {
      display: block;
      .menu-icon {
        display: none;
      }
    }
    .nav-links {
      display: flex;
      gap: 1.7rem;
    }
  }
  @media (min-width: 1000px) {
    font-size: 2rem;
    .nav-links {
      gap: 3rem;
    }
  }
`

export default Navbar
