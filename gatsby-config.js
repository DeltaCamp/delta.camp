let env = process.env.NODE_ENV || "development"

console.log(`Using environment: '${env}'`)

const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Delta Camp | Building Apps for the Third Web',
    author: 'Chuck Bergeron, Brendan Asselstine',
    description: '.',
    siteUrl: 'https://delta.camp',
    siteDescription: 'Delta Camp creates DApps in Vancouver, BC.'
  },
  pathPrefix: '/gatsby-starter-blog',
  plugins: [
    'gatsby-plugin-layout',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    {
      resolve: `gatsby-plugin-sass`
    },
    {
      resolve: `gatsby-transformer-sharp`
    },
    {
      resolve: `gatsby-plugin-sharp`
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `models`,
        path: path.join(__dirname, `src`, `assets`, `models`)
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `assets`, `images`)
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, `src`, `pages`),
        name: 'pages'
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        pages: path.join(__dirname, 'src/pages')
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        excerpt_separator: `<!-- more -->`,
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              inlineCodeMarker: '^',
              showLineNumbers: true
            }
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants'
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-131029656-1`
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Delta Camp, Fresh Tracks`,
        short_name: `DeltaCamp`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/favicon.svg`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/favicon.png",

        // WebApp Manifest Configuration
        appName: null, // Inferred with your package.json
        appDescription: null,
        developerName: null,
        developerURL: null,
        dir: 'auto',
        lang: 'en-US',
        background: '#fff',
        theme_color: '#fff',
        display: 'standalone',
        orientation: 'any',
        start_url: '/?homescreen=1',
        version: '1.0',

        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          opengraph: true,
          twitter: true,
          yandex: false,
          windows: true
        }
      }
    }
  ],
}
