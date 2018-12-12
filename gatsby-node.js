const env = process.env.NODE_ENV || "development"

console.log(`Using environment: '${env}'`)


const _ = require("lodash")
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const tagTemplate = path.resolve("src/templates/tags.js")
  const blogPostTemplate = path.resolve("src/templates/blog-post.js")

  let tags = []

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              sort: {
                fields: [frontmatter___date], order: DESC
              }
              limit: 3000
            ) {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    tags
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }


        // Blog Post Pages:
        // Create blog posts pages
        const posts = result.data.allMarkdownRemark.edges

        // Filter out draft posts in production but show in dev
        const showDrafts = (env.NODE_ENV === 'development')
        const allowedPosts = posts.filter(post =>
          post.node.frontmatter.draft !== showDrafts
        )

        allowedPosts.forEach((post, index) => {
          const previous = index === allowedPosts.length - 1 ? null : allowedPosts[index + 1].node;
          const next = index === 0 ? null : allowedPosts[index - 1].node;

          createPage({
            path: post.node.fields.slug,
            component: blogPostTemplate,
            context: {
              slug: post.node.fields.slug,
              previous,
              next,
            },
          })

          return true
        })



        // Tags Pages:
        // Iterate through each post, putting all found tags into `tags`
        _.each(allowedPosts, edge => {
          if (_.get(edge, "node.frontmatter.tags")) {
            tags = tags.concat(edge.node.frontmatter.tags)
          }
        })

        tags = _.uniq(tags)

        tags.forEach(tag => {
          createPage({
            path: `/blog/tags/${_.kebabCase(tag)}/`,
            component: tagTemplate,
            context: {
              tag,
            },
          })
        })


        return true
      })
    )
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
