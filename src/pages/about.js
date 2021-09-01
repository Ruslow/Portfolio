import React from "react"
import styled from "styled-components"
import About from "../components/About"

const about = () => {
  return (
    <Wrapper className="page">
      <About />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  text-align: center;
  padding: 12rem 0 4rem;
  .about-text {
    font-size: 3rem;
    .eng-text {
      font-size: 4.3rem;
      font-family: ab;
    }
  }
  .tech {
    margin-top: 5rem;
  }
  .footer {
    margin-top: 5rem;
  }
  .tags {
    flex-wrap: wrap;
    margin-top: 2rem;
  }
  @media (min-width: 768px) {
    padding: 5rem 0;

    h2,
    .underline {
      transform: translateY(50px);
    }
    .about-text {
      margin: 0 auto;
      width: 50ch;
    }
  }
  @media (min-width: 1000px) {
    .flex {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 13rem;
    }
  }
`
export default about
