import React, { Fragment } from "react"
import { Link, graphql } from "gatsby"
import Helmet from "react-helmet"

import { BlogColumn } from 'src/components/BlogColumn'
import { BlogHeader } from 'src/components/BlogHeader'

const Tags = ({ pageContext, data }) => {
  if (data.allMarkdownRemark === null) {
    console.error('could not find any blog posts (error querying frontmatter draft?)')
    return null
  }

  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark

  return (
    <div>
      <Helmet>
        <title>Posts tagged: {tag}</title>
      </Helmet>

      <BlogHeader />

      <section className="section">
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
    </div>
  )
}

export default Tags

// always exclude draft posts tags from working properly
export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      sort: {
        fields: [frontmatter___date], order: DESC
      },
      filter: {
        frontmatter: {
          tags: {
            in: [$tag]
          }
          draft: {
            eq: false
          }
        }
      }
      limit: 3000
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            draft
          }
        }
      }
    }
  }
`
