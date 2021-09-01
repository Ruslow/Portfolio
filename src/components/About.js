import React, { useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useGlobalContext } from "./Context"
import SEO from "./SEO"
import { useRef } from "react"
const About = () => {
  const { lang } = useGlobalContext()

  return (
    <>
      <SEO
        title={`${lang}` === "en-US" ? "About" : "О себе"}
        description={
          `${lang}` === "en-US"
            ? "this is about page that contains my resume's text"
            : "О себе"
        }
      />
      <div className="section-center">
        <h2 className="title">
          {`${lang}` === "en-US" ? "About me" : "О себе"}
        </h2>
        <div className="underline"></div>
        <div className="flex">
          <StaticImage
            src="../assets/images/about.svg"
            alt="my photo"
            placeholder="blurred"
          />
          <article className="footer about-text">
            {lang === "en-US" ? (
              <div className="eng-text">
                <p>
                  Hello! My name is Ruslan and I enjoy creating websites. This
                  is my passion and I'd like to show you what I've already
                  learned
                </p>
                <p className="tech">
                  Here are a few technologies I've been working with :
                </p>
              </div>
            ) : (
              <div>
                <p>
                  Привет! Меня зовут Руслан, и я обожаю создавать сайты. Это моя
                  страсть, и я хотел бы показать вам что уже выучил
                </p>
                <p className="tech">
                  Ниже представлены пару технологий, с которыми я работал :
                </p>
              </div>
            )}
            <div className="tags">
              <p className="tags-p">HTML</p>
              <p className="tags-p">CSS</p>
              <p className="tags-p">JavaScript</p>
              <p className="tags-p">React</p>
              <p className="tags-p">React styled components</p>
              <p className="tags-p">Gatsby</p>
              <p className="tags-p">GraphQL</p>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}

export default About
