import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import AntdIcon from 'react-antd-icons/esm'

import { BlogColumn } from 'src/components/BlogColumn'
import { TagList } from 'src/components/TagList'
import { authorTwitterUsernames } from 'src/utils/authorTwitterUsernames'
import { authorImages } from 'src/utils/authorImages'

class BlogPostTemplate extends React.Component {
  render() {
    const { previous, next } = this.props.pageContext
    const data = this.props.data
    const post = data.markdownRemark

    const postTitle = post.frontmatter.title
    const postDescription = post.excerpt

    const tags = post.frontmatter.tags
    const author = post.frontmatter.author

    return (
      <div>
        <Helmet
          title={postTitle}
          htmlAttributes={{ lang: 'en' }}
          meta={[
            {
              name: 'description',
              content: postDescription
            },
            {
              property: "og:description",
              content: postDescription
            },
            {
              property: "og:title",
              content: postTitle
            },
            {
              property: "twitter:title",
              content: postTitle
            }
          ]}
        />

        <section className="section first">
          <div className="container">
            <div className="columns">
              <BlogColumn>
                <Link to='/blog' className="is-light">
                  <small>
                    ← Read more articles
                  </small>
                </Link>
                <br />
                <br />
                <br />

                <h2 className="is-bottom-marginless">
                  {post.frontmatter.title}
                </h2>

                <div className="blog-post--author-container">
                  <figure className="image is-72x72">
                    <Img
                      fixed={authorImages(author, data)}
                      alt={`Photo of ${author}`}
                      className="is-rounded is-rounded--shadow"
                    />
                  </figure>

                  <h6 className="post-author">
                    <a href={`https://twitter.com/${authorTwitterUsernames[author]}`}>{author} <AntdIcon className="inline-icon" type={'twitter'} /></a>
                  </h6>
                  <p className="post-date">
                    <small>{post.frontmatter.date}</small>
                  </p>
                </div>
              </BlogColumn>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="columns">
              <BlogColumn>
                <div
                  dangerouslySetInnerHTML={{ __html: post.html }}
                  className="blog-post--content"
                />

                <br />
                <h6 className="is-bottom-marginless">
                  <small>Written by <a href={`https://twitter.com/${authorTwitterUsernames[author]}`}>{author} <AntdIcon className="inline-icon" type={'twitter'} /></a></small>
                </h6>
                <h6 className="is-bottom-marginless">
                  <small>Originally Published {post.frontmatter.from_medium ? 'on Medium' : ''} {post.frontmatter.date}</small>
                </h6>

                <br />
                <br />
                <TagList tags={tags} />

                <br />
                <br />
                <hr />
                <br />
                <h3 className="is-size-3 has-text-centered">
                  Need something built?
                  <br />
                  <Link to='/contact' className="has-text-center">
                    We'd love to help
                  </Link>
                </h3>

              </BlogColumn>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="columns">
              <BlogColumn>
                <div className="columns">
                  <div className="column has-text-left">
                    {
                      previous &&
                      <Link to={previous.fields.slug} rel="prev">
                        ←<br />{previous.frontmatter.title}
                      </Link>
                    }
                  </div>

                  <div className="column has-text-right">
                    {
                      next &&
                      <Link to={next.fields.slug} rel="next">
                        →
                        <br />
                        {next.frontmatter.title}
                      </Link>
                    }
                  </div>
                </div>

                <div className='has-text-centered'>
                  <Link to='/blog'>
                    <small>
                      View all articles
                    </small>
                  </Link>
                </div>
                <br />
              </BlogColumn>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        author
        date(formatString: "MMMM Do, YYYY")
        title
        tags
        from_medium
        draft
      }
    }
    chuckProfilePic: file(relativePath: { eq: "chuck-bergeron--blog-photo-xs.jpg" }) {
      childImageSharp {
        fixed(width: 72, height: 72) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    brendanProfilePic: file(relativePath: { eq: "brendan-asselstine--blog-photo-xs.jpg" }) {
      childImageSharp {
        fixed(width: 72, height: 72) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
  }
`
