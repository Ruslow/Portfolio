import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useGlobalContext } from "./Context"
import { FaGithubSquare } from "@react-icons/all-files/fa/FaGithubSquare"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { FaExternalLinkAlt } from "@react-icons/all-files/fa/FaExternalLinkAlt"

const Projectscomp = () => {
  const { lang } = useGlobalContext()
  const data = useStaticQuery(graphql`
    {
      allContentfulProjects(sort: { fields: featured, order: DESC }) {
        nodes {
          name
          url
          id
          featured
          node_locale
          sourceCode
          urlsource
          image {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          }
          tags {
            tags
          }
        }
      }
    }
  `)
  const projects = data.allContentfulProjects.nodes

  return (
    <>
      <Wrapper className="cards">
        {projects
          .filter(pr => pr.node_locale === `${lang}`)
          .map(pr => {
            const { id, image, name, tags, url, sourceCode, urlsource } = pr

            return (
              <article className="card" key={id}>
                <GatsbyImage
                  className="img"
                  image={image.gatsbyImageData}
                  alt={name}
                />
                <div className="mid">
                  <h4>{name}</h4>
                  <div className="tags">
                    {tags.tags.map((tag, index) => {
                      return (
                        <p className="tags-p" key={index}>
                          {tag}
                        </p>
                      )
                    })}
                  </div>
                </div>
                <div className="footer">
                  <FaGithubSquare />
                  <a rel="noopener noreferrer" href={urlsource} target="_blank">
                    {sourceCode}
                  </a>
                </div>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={url}
                  className="go"
                >
                  <FaExternalLinkAlt />
                </a>
              </article>
            )
          })}
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
  .card {
    position: relative;
    height: 350px;
    .img {
      height: 190px;
      object-fit: cover;
    }
    .mid {
      height: 120px;
    }
    .footer {
      height: 40px;
      text-transform: capitalize;
    }
  }
  .go {
    position: absolute;
    color: var(--primary-color);
    left: 50%;
    top: 50%;
    background-color: white;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    font-size: 2.4rem;
    padding: 1rem 1.4rem;
    transition: 0.4s ease-in-out;
    &:hover {
      background-color: var(--primary-color);
      color: white;
    }
  }
  .mid {
    padding: 1.5rem 0;
    background-color: white;
    color: #222;
  }
  .footer {
    padding: 1rem 0;
    display: flex;
    justify-content: space-around;
    background: var(--primary-color);
    a {
      color: inherit;
    }
  }

  @media (min-width: 768px) {
    margin-top: 5rem;
    display: flex;
    gap: 7rem;
    flex-wrap: wrap;
    justify-content: center;
    .go {
      font-size: 3rem;
    }
  }
`
export default Projectscomp
