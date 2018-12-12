import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = post.excerpt
    const { previous, next } = this.props.pageContext

    return (
      <Fragment>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />

        <section className="section first">
          <div className="container">
            <div className="columns">
              <div className="column has-text-centered">
                <h1>{post.frontmatter.title}</h1>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column has-text-centered">
                <p
                  style={{
                    display: 'block',
                  }}
                >
                  {post.frontmatter.date}
                </p>

                <figure className="image is-128x128">
                  <Img
                    fixed={this.props.data.chuckProfilePic.childImageSharp.fixed}
                    alt={`Chuck Bergeron`}
                    className="is-rounded"
                  />
                </figure>
                <p>
                  Written by <strong>Chuck Bergeron</strong>.
                  <br />
                  <a href="https://twitter.com/chuckbergeron">
                    Follow on Twitter
                  </a>
                </p>

                <div dangerouslySetInnerHTML={{ __html: post.html }} />

                <ul
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    listStyle: 'none',
                    padding: 0,
                  }}
                >
                  <li>
                    {
                      previous &&
                      <Link to={previous.fields.slug} rel="prev">
                        ← {previous.frontmatter.title}
                      </Link>
                    }
                  </li>
                  <li>
                    {
                      next &&
                      <Link to={next.fields.slug} rel="next">
                        {next.frontmatter.title} →
                      </Link>
                    }
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
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
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
    chuckProfilePic: file(relativePath: { eq: "chuck-bergeron--profile-sm.jpg" }) {
      childImageSharp {
        fixed(width: 96, height: 96) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
  }
`
