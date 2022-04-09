import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

const Instagram = () => {
  const query = useStaticQuery(graphql`
  query {
    allFile(filter: { relativeDirectory: { eq: "insta-images" } }) {
      edges {
        node {
          id
          childImageSharp {
            fluid(maxWidth: 250, maxHeight: 250) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`)
  return (
    <div className="gallery">
      {query.allFile.edges.map((item, i) => {
        return item.node?.childImageSharp?.fluid ? (
          <div key={i}>
            <a>
              <Image
                className="gallery__image"
                objectFit="cover"
                fluid={item.node?.childImageSharp?.fluid}
                alt={
                  !item.node.caption
                    ? "Instagram feed photo"
                    : item.node.caption
                }
              />
            </a>
          </div>) : null
      })
      }
    </div >
  )
}

export default Instagram;