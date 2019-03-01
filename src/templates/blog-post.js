import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import AntdIcon from 'react-antd-icons/esm'
import ScrollToTop from 'src/components/ScrollToTop'
import { BlogColumn } from 'src/components/BlogColumn'
import { TagList } from 'src/components/TagList'
import { authorTwitterUsernames } from 'src/utils/authorTwitterUsernames'
import { authorImages } from 'src/utils/authorImages'
import { stripMarkdown } from 'src/utils/stripMarkdown'

class BlogPostTemplate extends React.Component {
  render() {
    const { previous, next } = this.props.pageContext
    const data = this.props.data
    const post = data.markdownRemark
    const siteUrl = data.site.siteMetadata.siteUrl

    const postTitle = post.frontmatter.title

    const sanitizedPostDescription = stripMarkdown(post.excerpt.substr(0, 240))
    const lastIndex = sanitizedPostDescription.lastIndexOf(' ')
    const shortenedSanitizedPostDescription = `${sanitizedPostDescription.substring(0, lastIndex)} ...`

    const tags = post.frontmatter.tags
    const author = post.frontmatter.author
    const socialImage = post.frontmatter.socialImage

    const meta = [
      {
        name: 'description',
        content: shortenedSanitizedPostDescription
      },
      {
        property: "og:description",
        content: shortenedSanitizedPostDescription
      },
      {
        property: "og:title",
        content: postTitle
      },
      {
        property: "twitter:title",
        content: postTitle
      }  
    ]

    if (socialImage) {
      meta.push({
        property: "twitter:image",
        content: `${siteUrl}${socialImage.publicURL}`
      })
      meta.push({
        property: "og:image",
        content: `${siteUrl}${socialImage.publicURL}`
      })
    }

    return (
      <div>
        <ScrollToTop />
        <Helmet
          title={postTitle}
          htmlAttributes={{ lang: 'en' }}
          meta={meta}
        />

        <section className="section first">
          <div className="container">
            <div className="columns">
              <BlogColumn>
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
                      <Link to={previous.fields.slug} rel="prev" className='is-size-6'>
                        <strong className="is-size-3">←</strong>
                        <br />
                        <strong className="is-size-6">{previous.frontmatter.title}</strong>
                      </Link>
                    }
                  </div>

                  <div className="column has-text-right">
                    {
                      next && 
                        <Link to={next.fields.slug} rel="next">
                          <strong className="is-size-3">→</strong>
                          <br />
                          <strong className="is-size-6">{next.frontmatter.title}</strong>
                        </Link>
                    }
                  </div>
                </div>

                <div className='has-text-centered'>
                  <Link to='/blog' className="is-size-6">
                    <strong>
                      View all articles
                    </strong>
                  </Link>
                </div>
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
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
        siteUrl
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
        socialImage {
          publicURL
        }
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
