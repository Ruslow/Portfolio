import React from "react"
import { useGlobalContext } from "./Context"
import Seo from "./Seo"
const ProjectTitle = () => {
  const { lang } = useGlobalContext()
  return (
    <>
      <Seo
        title={`${lang}` === "en-US" ? "Projects" : "Проекты"}
        description={
          `${lang}` === "en-US"
            ? "this is projects page that contains the stuff I've worked on"
            : "эта страница содержит мои проекты"
        }
      />
      <article>
        <h2 className="title">
          {`${lang}` === "en-US" ? "Projects" : "Проекты"}
        </h2>
        <div className="underline"></div>
      </article>
    </>
  )
}

export default ProjectTitle
