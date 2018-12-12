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
    <Fragment>
      <BlogHeader />

      <section className="section first">
        <div className="container">
          <div className="columns">
            <BlogColumn>
              <h5>
                All Tags:
              </h5>

              <ul>
                {group.map(tag => (
                  <li key={tag.fieldValue}>
                    <Link to={`/blog/tags/${kebabCase(tag.fieldValue)}/`}>
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
    </Fragment>
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
