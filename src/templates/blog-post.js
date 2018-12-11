import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import AntdIcon from 'react-antd-icons/esm'

import { BlogColumn } from 'src/components/BlogColumn'
import { TagList } from 'src/components/TagList'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = post.excerpt
    const tags = post.frontmatter.tags
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
              <BlogColumn>
                <h5 className="is-bottom-marginless">
                  {post.frontmatter.title}
                </h5>

                <div className="blog-post--author-container">
                  <figure className="image is-72x72">
                    <Img
                      fixed={this.props.data.chuckProfilePic.childImageSharp.fixed}
                      alt={`Chuck Bergeron`}
                      className="is-rounded is-rounded--shadow"
                    />
                  </figure>

                  <h6 className="post-author">
                    Chuck Bergeron <a href="https://twitter.com/chuckbergeron"><AntdIcon className="inline-icon" type={'twitter'} /></a>
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
                <div dangerouslySetInnerHTML={{ __html: post.html }} />

                <br />
                <h6>
                  <small>Chuck Bergeron <a href="https://twitter.com/chuckbergeron"><AntdIcon className="inline-icon" type={'twitter'} /></a></small>
                </h6>
                <p>
                  <small>Originally Published {post.frontmatter.date}</small>
                </p>
                <TagList tags={tags} />

              </BlogColumn>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="columns">
              <BlogColumn>
                <ul>
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
              </BlogColumn>
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
        author
        date(formatString: "MMMM Do, YYYY")
        title
        tags
      }
    }
    chuckProfilePic: file(relativePath: { eq: "chuck-bergeron--profile-sm.jpg" }) {
      childImageSharp {
        fixed(width: 72, height: 72) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
  }
`
