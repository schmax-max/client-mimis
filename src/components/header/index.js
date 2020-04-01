import React from "react"
import "./header.css"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export const HeaderDesktop = props => {
  return (
    <Link className="header" to="/">
      <div className="sides"></div>
      <Center />
      <div className="sides"></div>
    </Link>
  )
}

const Center = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "mimis.png" }) {
        childImageSharp {
          fixed(height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <div className="center">
      <div className="logo">
        <Img fixed={data.logo.childImageSharp.fixed} />
      </div>
      <div className="textArea">
        <h1>Mimis</h1>
        <h4>the global editor</h4>
      </div>
    </div>
  )
}
