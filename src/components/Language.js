import React from "react"
import styled from "styled-components"
import { useGlobalContext } from "./Context"
const Language = () => {
  const { ruLang, enLang, lang } = useGlobalContext()
  return (
    <Wrapper
      onChange={e => {
        if (e.target.value === "Rus") {
          ruLang()
        }
        if (e.target.value === "Eng") {
          enLang()
        }
        if (e.target.value === "Рус") {
          ruLang()
        }
        if (e.target.value === "Англ") {
          enLang()
        }
      }}
      name="lang"
      id="lang"
    >
      <option>{`${lang}` === "en-US" ? "Eng" : "Англ"}</option>
      <option>{`${lang}` === "en-US" ? "Rus" : "Рус"}</option>
    </Wrapper>
  )
}

const Wrapper = styled.select`
  background: var(--primary-color);
  outline: 0;
  border: none;
  font-size: 1.8rem;
  padding: 0.3rem 1rem;
  border-radius: 5px;
  color: white;
  &:hover {
    cursor: pointer;
  }
`
export default Language
