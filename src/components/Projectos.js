import React from "react"
import styled from "styled-components"
import image from "../assets/images/tilt.svg"
import image2 from "../assets/images/tilt copy.svg"
import { useGlobalContext } from "./Context"
import Featured from "./Featured"
import { Link } from "gatsby"
const Projectos = () => {
  const { lang, theme, render } = useGlobalContext()
  return (
    <>
      <Wrapper>
        {render &&
          (theme === "dark-theme" ? (
            <img src={image} alt="" />
          ) : (
            <img src={image2} alt="" />
          ))}
        <div className="section-center">
          <h2 className="title">
            {`${lang}` === "en-US" ? "Featured projects" : "Лучшие проекты"}
          </h2>
          <div className="underline"></div>
          <Featured />
          <Link className="btn" to="/projects">
            {`${lang}` === "en-US" ? "all projects" : "все проекты"}
          </Link>
        </div>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.main`
  background-color: var(--third-color);
  padding-bottom: 5rem;
  .flip {
    transform: scale(-1, 1);
  }
  text-align: center;
  margin-top: 3.4rem;
  .underline {
    margin: 1rem auto 0;
  }
  .btn {
    margin-top: 3rem;
    padding: 1rem 1rem;
  }
  .btn:hover {
    background-color: var(--secondary-color);
  }
  @media (min-width: 768px) {
    padding-bottom: 8rem;
    .btn {
      margin-top: 6rem;
    }
  }
`
export default Projectos
