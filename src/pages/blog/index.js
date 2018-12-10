import React, { Fragment } from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import Helmet from 'react-helmet'

import NounProjectMountainsIcon from '-!svg-react-loader!src/assets/images/noun_Mountains_836250_000000.svg'

class BlogIndex extends React.Component {

  renderBlogLayout = (data) => {
    const posts = data.allMarkdownRemark.edges

    return (
      <Fragment>
        <section className="section first">
          <div className="container">
            <div className="columns">
              <div className="column has-text-centered">
                <NounProjectMountainsIcon width="50" />
                <h1 className="page-title">
                  Fresh Tracks
                </h1>
                <p>
                  Written by the experienced delta.camp team
                  <br />Designers &amp; developers creating superb decentralized experiences
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-two-thirds-tablet is-three-quarters-fullhd">
                {posts.map(({ node }) => {
                  const title = node.frontmatter.title || node.fields.slug
                  return (
                    <div key={node.fields.slug}>
                      <h6>
                        <Link to={node.fields.slug}>
                          {title}
                        </Link>
                      </h6>
                      <small>{node.frontmatter.date}</small>
                      <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                      <p>{node.author}</p>

                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    )
  }

  render() {
    return <StaticQuery
      query={graphql`
        query {
          chuckProfilePic: file(relativePath: { eq: "chuck-bergeron--profile-sm.jpg" }) {
            childImageSharp {
              fixed(width: 96, height: 96) {
                ...GatsbyImageSharpFixed_tracedSVG
              }
            }
          }
          allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
              node {
                excerpt
                fields {
                  slug
                }
                frontmatter {
                  date(formatString: "MMMM DD, YYYY")
                  title
                }
              }
            }
          }
        }
      `}
      render={(data) => this.renderBlogLayout(data)}
    />
  }
}

export default BlogIndex
