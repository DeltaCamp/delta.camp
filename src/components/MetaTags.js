import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Helmet from 'react-helmet'

class MetaTags extends React.Component {

  renderHelmet = (data) => {
    const location = this.props.location || {}

    const siteTitle = data.site.siteMetadata.title
    const siteUrl = data.site.siteMetadata.siteUrl
    const siteDescription = data.site.siteMetadata.siteDescription

    const year = (new Date()).getFullYear()

    return (
      <Helmet
        titleTemplate={`%s | ${siteTitle}`}
        defaultTitle={siteTitle}
        htmlAttributes={{
          lang: 'en',
          class: this.props.cssClass
        }}
        link={
          [
            {
              href: "https://fonts.googleapis.com/css?family=PT+Mono&subset=cyrillic,cyrillic-ext,latin-ext",
              rel: "stylesheet"
            },
            {
              rel: "stylesheet",
              href: "https://use.typekit.net/xce0plw.css"
            },
            {
              rel: 'alternate',
              type: 'application/atom+xml',
              href: `${siteUrl}/rss.xml`,
              title: `The Delta Camp blog feed`
            }
          ]
        }
        meta={[
          {
            name: "description",
            content: siteDescription
          },
          {
            property: "og:description",
            content: siteDescription
          },
          {
            name: "keywords",
            content: "apps dapps design ethereum blockchain frontend ui ux"
          },
          {
            name: "author",
            content: "Chuck Bergeron, Brendan Asselstine"
          },
          {
            name: "copyright",
            content: `© ${year} Chuck Bergeron, Brendan Asselstine`
          },
          {
            property: "og:site_name",
            content: "deltacamp"
          },
          {
            property: "og:url",
            content: `${siteUrl}${location.pathname}`
          },
          {
            property: "og:type",
            content: "business.business"
          },
          {
            property: "og:image",
            content: `${siteUrl}${data.deltaCampLogo.publicURL}`
          },
          {
            property: "business:contact_data:street_address",
            content: "151 E Broadway, Vancouver BC V5T 1W1"
          },
          {
            property: "business:contact_data:locality",
            content: "Vancouver, BC"
          },
          {
            property: "business:contact_data:postal_code",
            content: "V5T 1W1"
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
            content: "@teamdeltacamp"
          },
          {
            property: "twitter:image",
            content: `${siteUrl}${data.deltaCampLogo.publicURL}`
          },
          {
            property: "twitter:url",
            content: 'https://twitter.com/teamdeltacamp'
          }
        ]}
      />
    )
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            site {
              siteMetadata {
                siteUrl
                title
                description
              }
            }
            deltaCamp3DSymbol: file(relativePath: { eq: "DeltaCamp-logo-3d--symbol.fbx" }) {
              publicURL
            }
            deltaCamp3DLightbox: file(relativePath: { eq: "DeltaCamp-logo-3d--lightbox.fbx" }) {
              publicURL
            }
            deltaCampLogo: file(relativePath: { eq: "delta-camp--logo-pink-vertical--outlines@2x.png" }) {
              publicURL
            }
          }
        `}
        render={(data) => this.renderHelmet(data)}
      />
    )
  }
}

export default MetaTags
