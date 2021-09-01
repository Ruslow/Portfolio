import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { useGlobalContext } from "./Context"
import { useRef } from "react"
import { useEffect } from "react"

const Links = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulLinks(sort: { fields: createdAt }) {
        nodes {
          node_locale
          url
          id
          name
        }
      }
    }
  `)
  const { lang, showSidebar } = useGlobalContext()

  const links = data.allContentfulLinks.nodes
  const { closeSidebar } = useGlobalContext()

  return (
    <ul className={showSidebar ? "slidebar-links nav-links" : "nav-links"}>
      {links
        .filter(link => link.node_locale === `${lang}`)
        .map(link => {
          const { name, id, url } = link
          return (
            <li key={id}>
              <Link
                onClick={closeSidebar}
                className="nav-link"
                activeClassName="active-link"
                to={url}
              >
                {name}
              </Link>
            </li>
          )
        })}
    </ul>
  )
}

export default Links
