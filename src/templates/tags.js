import React, { Fragment } from "react"
import { Link, graphql } from "gatsby"

import { BlogColumn } from 'src/components/BlogColumn'
import { BlogHeader } from 'src/components/BlogHeader'

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <Fragment>
      <BlogHeader />

      <section className="section first">
        <div className="container">
          <div className="columns">
            <BlogColumn>
              <h5>
                {totalCount} Post(s) Tagged '{tag}':
              </h5>

              <ul>
                {edges.map(({ node }) => {
                  const { slug } = node.fields
                  const { title } = node.frontmatter
                  return (
                    <li key={slug}>
                      <Link to={slug}>{title}</Link>
                    </li>
                  )
                })}
              </ul>

              <br />
              <br />
              <br />

              <Link to="/blog/tags">
                View All Tags
              </Link>

              <br />
              <br />
              <br />
            </BlogColumn>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
