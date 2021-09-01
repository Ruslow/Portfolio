import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { useGlobalContext } from "./Context"

const SEO = ({ title, description }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          description
          title
        }
      }
    }
  `)
  const { site } = data
  const { lang, tempTitle } = useGlobalContext()

  const metaDescription = description || site.siteMetadata.description
  return (
    <Helmet
      htmlAttributes={{ lang: `${lang}` }}
      title={`${title} | ${site.siteMetadata.title} `}
      meta={[{ name: `description`, content: metaDescription }]}
    ></Helmet>
  )
}

export default SEO
