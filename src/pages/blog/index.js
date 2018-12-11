import React, { Fragment } from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import Helmet from 'react-helmet'
import AntdIcon from 'react-antd-icons/esm'

import { BlogColumn } from 'src/components/BlogColumn'
import { authorTwitterUsernames } from 'src/utils/authorTwitterUsernames'
import NounProjectMountainsIcon from '-!svg-react-loader!src/assets/images/noun_Mountains_836250_000000.svg'

class BlogIndex extends React.Component {

  formattedTwitterLink = (author) => {
    let link

    if (author) {
      link = (
        <Fragment>
          &nbsp;-&nbsp;
          <a href={`https://twitter.com/${authorTwitterUsernames[author]}`}>{author} <AntdIcon className="inline-icon" type={'twitter'} /></a>
        </Fragment>
      )
    }

    return link
  }

  renderBlogLayout = (data) => {
    const posts = data.allMarkdownRemark.edges

    return (
      <Fragment>
        <section className="section first">
          <div className="container">
            <div className="columns">
              <BlogColumn hasTextCentered={true}>
                <NounProjectMountainsIcon width="50" />
                <h1 className="page-title">
                  Fresh Tracks
                </h1>
                <br />
                <p className="blog-intro">
                  Written by the experienced delta.camp team
                  <br />Designers &amp; developers creating superb decentralized experiences
                </p>
              </BlogColumn>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="columns">
              <BlogColumn>
                {posts.map(({ node }) => {
                  const twitterLink = this.formattedTwitterLink(node.frontmatter.author)
                  const title = node.frontmatter.title || node.fields.slug

                  return (
                    <div key={node.fields.slug} className="blog-post--listing">
                      <h6>
                        <Link to={node.fields.slug}>
                          {title}
                        </Link>
                      </h6>
                      <p>
                        <small>{node.frontmatter.date}{twitterLink}</small>
                      </p>

                      <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                    </div>
                  )
                })}
              </BlogColumn>
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
                  author
                  date(formatString: "MMMM DD, YYYY")
                  tags
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
