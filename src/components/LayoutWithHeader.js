import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from 'src/components/Layout'
import { rhythm } from 'src/utils/typography'

import 'src/assets/stylesheets/normalize.css'
import 'src/assets/stylesheets/highlight.css'
import 'src/assets/stylesheets/deltacamp.css.scss'

class LayoutWithHeader extends React.Component {
  renderLayoutAndHeader = (data) => {
    const { children } = this.props

    const location = this.props.location || {}

    const siteTitle = data.site.siteMetadata.title
    const siteDescription = data.site.siteMetadata.description
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[
            {
              name: 'description',
              content: siteDescription,
            },
            {
              name: "description",
              content: "Delta Camp creates DApps in Vancouver, BC."
            },
            {
              property: "og:description",
              content: "Delta Camp creates DApps in Vancouver, BC."
            },
            {
              name: "keywords",
              content: "apps dapps design"
            },
            {
              property: "og:title",
              content: "delta.camp -- Blockchain Development"
            },

            {
              name: "author",
              content: "Chuck Bergeron, Brendan Asselstine"
            },
            {
              name: "copyright",
              content: "Chuck Bergeron, Brendan Asselstine"
            },

            {
              property: "og:site_name",
              content: "deltacamp"
            },
            {
              property: "og:url",
              content: `${data.siteUrl}${location.pathname}`
            },
            {
              property: "og:type",
              content: "business.business"
            },

            {
              property: "og:image",
              content: data.profilePic.childImageSharp.fixed
            },

            {
              property: "business:contact_data:street_address",
              content: "280 Nelson St - Suite #523"
            },
            {
              property: "business:contact_data:locality",
              content: "Vancouver, BC"
            },
            {
              property: "business:contact_data:postal_code",
              content: "V6B 2E2"
            },
            {
              property: "business:contact_data:country_name",
              content: "Canada"
            },

            {
              property: "twitter:card",
              content: "summary"
            },
            {
              property: "twitter:site",
              content: "@thedeltacamp"
            },
            {
              property: "twitter:image",
              content: data.profilePic.childImageSharp.fixed // this work?
            },
            {
              property: "twitter:url",
              content: `${data.siteUrl}${location.pathname}`
            },
          ]}
          link={
            [
              {
                rel: "stylesheet",
                href: "https://use.typekit.net/xce0plw.css"
              },
              {
                rel: 'alternate',
                type: 'application/atom+xml',
                href: `${data.siteUrl}/index.xml`,
                title: `The Delta Camp blog feed`
              }
            ]
          }
          title={siteTitle}
        />

        {children}

      </Layout>
    )
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            site {
              siteMetadata {
                title
                description
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
            profilePic: file(relativePath: { eq: "delta-camp--logo.png" }) {
              childImageSharp {
                # Specify the image processing specifications right in the query.
                # Makes it trivial to update as your page's design changes.
                fixed(width: 851, height: 737) {
                  ...GatsbyImageSharpFixed_tracedSVG
                }
              }
            }
          }
        `}
        render={(data) => this.renderLayoutAndHeader(data)} />
    )
  }
}

export default LayoutWithHeader
