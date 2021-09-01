import React from "react"
import styled from "styled-components"
import Projectscomp from "../components/Projectscomp"
import ProjectTitle from "../components/ProjectTitle"

const projects = () => {
  return (
    <Wrapper className="page">
      <div className="section-center">
        <ProjectTitle />
        <Projectscomp />
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  text-align: center;
  padding: 7rem 0 4rem;
  background-color: var(--secondary-color);
  @media (min-width: 768px) {
    padding: 5rem 0;
    h2,
    .underline {
      transform: translateY(50px);
    }
    .underline {
      display: inline-block;
      margin-bottom: 5rem;
    }
  }
`
export default projects
