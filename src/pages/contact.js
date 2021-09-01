import React from "react"
import styled from "styled-components"
import Contact from "../components/Contact"

const contact = () => {
  return (
    <Wrapper className="page">
      <Contact />
    </Wrapper>
  )
}
const Wrapper = styled.section`
  text-align: center;
  padding: 7rem 0 4rem;
  .contact-form {
    margin: 4rem auto 0;
  }

  .flex {
    margin-top: 1rem;
  }
  @media (min-width: 768px) {
    padding: 5rem 0;
    .contact-form {
      margin: 0;
      padding-top: 1rem;
    }

    .flex {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8rem;
    }
    h2,
    .underline {
      transform: translateY(50px);
    }
    .underline {
      display: inline-block;
      margin-bottom: 15rem;
    }
  }
`
export default contact
