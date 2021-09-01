import React from "react"
import styled from "styled-components"
import { useGlobalContext } from "./Context"
const Language = () => {
  const { ruLang, enLang, lang } = useGlobalContext()
  return (
    <Wrapper
      onChange={e => {
        if (e.target.value === "Ru") {
          ruLang()
        }
        if (e.target.value === "Eng") {
          enLang()
        }
      }}
      name="lang"
      id="lang"
    >
      <option value="Eng">
        {`${lang}` === "en-US" ? "Eng" : "Английский"}
      </option>
      <option value="Ru">{`${lang}` === "en-US" ? "Ru" : "Русский"}</option>
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
