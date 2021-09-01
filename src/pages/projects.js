import React from "react"
import styled from "styled-components"
import { useGlobalContext } from "../components/Context"
import Projectscomp from "../components/Projectscomp"
import ProjectTitle from "../components/ProjectTitle"
import SEO from "../components/SEO"

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
  padding: 12rem 0 0;

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
