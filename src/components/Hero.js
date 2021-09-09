import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import image from "../assets/images/wavesOpacity.svg"
import image2 from "../assets/images/wavesOpacity copy.svg"
import { StaticImage } from "gatsby-plugin-image"

import Seo from "./Seo"
import { useStaticQuery, graphql } from "gatsby"
import { useGlobalContext } from "./Context"
import SocialIcons from "./Social-icons"

const Hero = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulHero {
        nodes {
          name
          node_locale
          undername
          contact
        }
      }
    }
  `)

  const heroText = data.allContentfulHero.nodes
  const { lang, theme, render } = useGlobalContext()
  return (
    <>
      <Seo
        title={`${lang}` === "en-US" ? "Home" : "Главная"}
        description={
          `${lang}` === "en-US"
            ? `I'm Ruslan
I Want To Become A Web Developer`
            : `Я Руслан
Я Хочу Стать Веб Разработчиком`
        }
      />
      <header>
        <Wrapper>
          <section className="section-center">
            <article>
              <div className="underline"></div>
              {heroText
                .filter(text => text.node_locale === `${lang}`)
                .map(text => {
                  const { name, undername, contact } = text
                  return (
                    <div>
                      <h1>{name}</h1>
                      <h4>Freelance Web And Mobile UI/UX Designer</h4>
                      <Link to="/contact" className="btn">
                        {contact}
                      </Link>
                    </div>
                  )
                })}
              <SocialIcons />
            </article>
            <StaticImage
              src="../assets/images/me.png"
              alt="my photo"
              placeholder="blurred"
            />
          </section>
        </Wrapper>
        {render &&
          (`${theme}` === "dark-theme" ? (
            <img src={image} alt="" />
          ) : (
            <img src={image2}></img>
          ))}
      </header>
    </>
  )
}

const Wrapper = styled.section`
  background: rgb(136, 86, 167);
  background: linear-gradient(
    180deg,
    var(--third-color) 47%,
    var(--secondary-color) 59%
  );
  height: 70vh;
  font-size: 6rem;
  text-transform: capitalize;
  font-family: nos;
  letter-spacing: 3px;
  overflow: hidden;
  .btn {
    padding: 0.7rem 1rem;
    margin: 0.8rem 0;
  }

  h4 {
    font-size: 2rem;
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: 0;
  }
  section {
    padding-top: 13rem;
    text-align: center;

    .underline {
      display: none;
    }
  }
  img {
    width: 100%;
    display: none;
  }
  article {
    margin-top: 2rem;
  }
  @media (min-width: 768px) {
    article {
      margin-top: 0;
    }
    height: 75vh;
    font-size: 5.8rem;
    h4 {
      font-size: 2.5rem;
    }
    img {
      display: block;
    }
    section {
      display: flex;
      align-items: center;
      text-align: left;
      justify-content: space-between;
      .btn {
        margin-bottom: 0.3rem;
        padding: 1rem 1.8rem;
      }
      .underline {
        display: block;
        margin: 0;
      }
    }
  }
  @media (min-width: 1000px) {
    font-size: 8rem;
    h4 {
      font-size: 3rem;
    }
    section {
      .btn {
        font-size: 4rem;
      }
    }
  }
`

export default Hero
