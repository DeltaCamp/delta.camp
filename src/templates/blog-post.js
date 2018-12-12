import React, { Fragment } from 'react'
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
    const post = this.props.data.markdownRemark
    const data = this.props.data
    const siteTitle = data.site.siteMetadata.title
    const siteDescription = post.excerpt
    const tags = post.frontmatter.tags
    const { previous, next } = this.props.pageContext
    const author = post.frontmatter.author

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
                <h6>
                  <small>Written by Chuck Bergeron <a href="https://twitter.com/chuckbergeron"><AntdIcon className="inline-icon" type={'twitter'} /></a></small>
                </h6>
                <small>
                  Originally Published {post.frontmatter.from_medium ? 'on Medium' : ''} {post.frontmatter.date}
                </small>

                <br />
                <br />
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

                <br />
                <hr />

                <div className='has-text-centered'>
                  <Link to='/blog'>
                    <small>
                      View more articles
                    </small>
                  </Link>
                </div>
                <br />
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
        from_medium
      }
    }
    chuckProfilePic: file(relativePath: { eq: "chuck-bergeron--profile-sm.jpg" }) {
      childImageSharp {
        fixed(width: 72, height: 72) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    brendanProfilePic: file(relativePath: { eq: "brendan-asselstine--profile-sm.png" }) {
      childImageSharp {
        fixed(width: 72, height: 72) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
  }
`
