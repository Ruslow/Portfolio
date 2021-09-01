import React from "react"
import styled from "styled-components"
import image from "../assets/images/tilt.svg"
import { GatsbyImage } from "gatsby-plugin-image"
import { useGlobalContext } from "./Context"
import { useStaticQuery, graphql } from "gatsby"
const Cirtificates = () => {
  const { lang } = useGlobalContext()
  const data = useStaticQuery(graphql`
    {
      allContentfulCirtificates(sort: { fields: title }) {
        nodes {
          id
          url
          title
          node_locale
          image {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          }
        }
      }
    }
  `)

  const cirtificates = data.allContentfulCirtificates.nodes

  return (
    <>
      <Wrapper>
        <img src={image} alt="" />
        <div className="section-center">
          <h2 className="title">
            {`${lang}` === "en-US" ? "Certificates" : "Сертификаты"}
          </h2>
          <div className="underline"></div>
          <div className="cards">
            {cirtificates
              .filter(cr => cr.node_locale === `en-US`)
              .map(cirt => {
                const { id, image, title, url } = cirt
                return (
                  <a
                    rel="noopener noreferrer"
                    className="card"
                    href={url}
                    target="_blank"
                    key={id}
                  >
                    <GatsbyImage
                      className="img"
                      image={image.gatsbyImageData}
                      alt={title}
                    />
                    <h3 className="text">{title}</h3>
                  </a>
                )
              })}
          </div>
        </div>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
  padding-bottom: 5rem;
  background-color: var(--secondary-color);
  text-align: center;
  margin-top: 3.4rem;

  .text {
    .icon {
      transition: 0.4s ease-in-out;
      &:hover {
        transform: scale(1.1);
        color: var(--secondary-color);
      }
    }
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 2px solid var(--primary-color);
    border-top: 0;
    background-color: var(--primary-color);
  }

  @media (min-width: 768px) {
    padding-bottom: 14rem;
    .text {
      padding: 1rem 0;
    }
    h3 {
      font-size: 3rem;
    }
    .img {
      height: 300px;
    }
  }
`
export default Cirtificates
