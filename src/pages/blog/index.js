import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import Helmet from 'react-helmet'
import AntdIcon from 'react-antd-icons/esm'
import ScrollToTop from 'src/components/ScrollToTop'
import { BlogColumn } from 'src/components/BlogColumn'
import { BlogHeader } from 'src/components/BlogHeader'
import { TagList } from 'src/components/TagList'
import { authorTwitterUsernames } from 'src/utils/authorTwitterUsernames'

class BlogIndex extends React.Component {

  formattedTwitterLink = (author) => {
    let link

    if (author) {
      link = (
        <div>
          <a href={`https://twitter.com/${authorTwitterUsernames[author]}`}>{author} <AntdIcon className="inline-icon" type={'twitter'} /></a>
        </div>
      )
    }

    return link
  }

  renderBlogLayout = (data) => {
    let posts = data.allMarkdownRemark.edges

    // Filter out draftt posts in production
    if (process.env.NODE_ENV !== 'development') {
      // console.log('All posts (drafts and published)', posts.length)

      posts = posts.filter(post =>
        post.node.frontmatter.draft === false
      )

      // console.log('Number of published posts', posts.length)
    }

    return (
      <div>
        <ScrollToTop />

        <Helmet>
          <title>Fresh Tracks, the Delta Camp Blog</title>
        </Helmet>

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
                      <h6 className="is-bottom-marginless">
                        <Link to={node.fields.slug}>
                          {title}
                        </Link>
                      </h6>

                      <small>{node.frontmatter.date}{twitterLink}</small>
                      <br />
                      <br />

                      <p dangerouslySetInnerHTML={{ __html: node.excerpt }} className="excerpt" />

                      <TagList tags={tags} />
                    </div>
                  )
                })}
              </BlogColumn>
            </div>
          </div>
        </section>
      </div>
    )
  }

  render() {
    return <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark(
            sort: {
              fields: [frontmatter___date], order: DESC
            }
            limit: 3000
          ) {
            edges {
              node {
                excerpt(format: HTML)
                fields {
                  slug
                }
                frontmatter {
                  author
                  date(formatString: "MMMM DD, YYYY")
                  tags
                  title
                  draft
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
