import React from "react"
import { FaVk } from "@react-icons/all-files/fa/FaVk"
import { FaFacebookSquare } from "@react-icons/all-files/fa/FaFacebookSquare"
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram"
import { FaGithubSquare } from "@react-icons/all-files/fa/FaGithubSquare"
import styled from "styled-components"
import { useGlobalContext } from "./Context"
const SocialIcons = () => {
  const { showSidebar } = useGlobalContext()
  return (
    <Wrapper
      className={showSidebar ? "sidebar-icons social-icons" : "social-icons"}
    >
      <li>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://vk.com/magamedov71"
        >
          <FaVk />
        </a>
      </li>
      <li>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.facebook.com/profile.php?id=100040615362252"
        >
          <FaFacebookSquare />
        </a>
      </li>
      <li>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.instagram.com/blurryface7_7_7/"
        >
          <FaInstagram />
        </a>
      </li>
      <li>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/Ruslow"
        >
          <FaGithubSquare />
        </a>
      </li>
    </Wrapper>
  )
}

const Wrapper = styled.ul`
  display: flex;
  justify-content: center;
  a {
    margin-right: 1.8rem;
    color: var(--text-col);
    font-size: 4rem;
    transition: color 0.4s ease-in-out;

    &:hover {
      color: var(--primary-color);
    }
  }

  @media (min-width: 768px) {
    justify-content: start;
    gap: 2rem;
  }
`

export default SocialIcons
