import React from "react"
import styled from "styled-components"
import { useGlobalContext } from "./Context"

const Footer = () => {
  const { lang } = useGlobalContext()
  return (
    <Wrapper>
      RusDev &copy; {new Date().getFullYear()}{" "}
      {`${lang}` === "en-US" ? "all rights reserved" : "все права защищены"}
    </Wrapper>
  )
}
const Wrapper = styled.footer`
  background: var(--primary-color);
  text-align: center;
  font-size: 1.5rem;
  text-transform: uppercase;
  padding: 2rem 1.4rem;
  color: #000;
  @media (min-width: 768px) {
    font-size: 2rem;
    padding: 4rem 1.4rem;
  }
`
export default Footer
