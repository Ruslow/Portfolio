import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Seo from "../components/Seo"

const Error = () => {
  return (
    <>
      <Seo title="error" />
      <Wrapper className="page">
        <section>
          <h1>oops it's a dead end</h1>
          <Link to="/" className="btn">
            back home
          </Link>
        </section>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.main`
  display: grid;
  place-items: center;
  background-color: var(--secondary-color);
  text-align: center;
  .btn {
    margin-top: 2rem;
    padding: 1rem 1rem;
  }
  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
`

export default Error
