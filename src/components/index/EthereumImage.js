import React from "react"
import { StaticQuery, graphql } from "gatsby"

export default ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        architectureCropped: file(relativePath: { eq: "architecture-cropped.jpg" }) {
          publicURL
        }
      }
    `}
    render={(data) => <img className={className} src={data.architectureCropped.publicURL} />}
    />
)
