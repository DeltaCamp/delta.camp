import React, { Fragment } from "react"
import Helmet from "react-helmet"
import { kebabCase } from "lodash"
import { Link, graphql } from "gatsby"

import { BlogColumn } from 'src/components/BlogColumn'
import { BlogHeader } from 'src/components/BlogHeader'

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title }
    }
  }
}) => (
  (
    <div>
      <Helmet>
        <title>Fresh Tracks - All tags</title>
      </Helmet>

      <BlogHeader />

      <section className="section">
        <div className="container">
          <div className="columns">
            <BlogColumn>
              <h5>
                All Tags:
              </h5>

              <ul>
                {group.map(tag => (
                  <li key={kebabCase(tag.fieldValue.replace(' ', '-'))}>
                    <Link to={`/blog/tags/${kebabCase(tag.fieldValue.replace(' ', '-'))}/`}>
                      {tag.fieldValue} ({tag.totalCount})
                    </Link>
                  </li>
                ))}
              </ul>

              <br />
              <br />
              <br />
            </BlogColumn>
          </div>
        </div>
      </section>
    </div>
  )
)

export default TagsPage

// always exclude draft posts tags from working properly
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: {
        fields: [frontmatter___date], order: DESC
      }
      filter: {
        frontmatter: {
          draft: {
            eq: false
          }
        }
      }
      limit: 3000
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
