import React from "react"
import { StaticQuery, graphql } from "gatsby"

export default ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "OpenCare1.png" }) {
          publicURL
        }
      }
    `}
    render={(data) => <img className={className} src={data.file.publicURL} />}
    />
)
