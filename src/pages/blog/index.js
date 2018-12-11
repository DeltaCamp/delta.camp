import React, { Fragment } from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import Helmet from 'react-helmet'
import AntdIcon from 'react-antd-icons/esm'

import { BlogColumn } from 'src/components/BlogColumn'
import { BlogHeader } from 'src/components/BlogHeader'
import { TagList } from 'src/components/TagList'
import { authorTwitterUsernames } from 'src/utils/authorTwitterUsernames'

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

    const showDrafts = (process.env.NODE_ENV === 'development')
    const allowedPosts = posts.filter(post =>
      post.node.frontmatter.draft !== showDrafts
    )

    return (
      <Fragment>
        <BlogHeader />

        <section className="section">
          <div className="container">
            <div className="columns">
              <BlogColumn>
                {posts.map(({ node }) => {
                  const twitterLink = this.formattedTwitterLink(node.frontmatter.author)
                  const title = node.frontmatter.title || node.fields.slug
                  const tags = node.frontmatter.tags

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

                      <TagList tags={tags} />
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
          allMarkdownRemark(
            sort: {
              fields: [frontmatter___date], order: DESC
            }
            limit: 3000
          ) {
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
