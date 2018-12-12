const env = process.env.NODE_ENV || "development"

console.log(`Using environment: '${env}'`)


const _ = require("lodash")
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const showDrafts = false

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
                    draft
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
        let posts = result.data.allMarkdownRemark.edges

        // Filter out draftt posts in production
        if (process.env.NODE_ENV !== 'development') {
          console.log('All posts (drafts and published)', posts.length)

          posts = posts.filter(post =>
            post.node.frontmatter.draft === showDrafts
          )

          console.log('Number of published posts', posts.length)
        }

        posts.forEach((post, index) => {
          const previous = index === posts.length - 1 ? null : posts[index + 1].node;
          const next = index === 0 ? null : posts[index - 1].node;

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
        _.each(posts, edge => {
          if (_.get(edge, "node.frontmatter.tags")) {
            tags = tags.concat(edge.node.frontmatter.tags)
          }
        })

        tags = _.uniq(tags)

        tags.forEach(tag => {
          createPage({
            path: `/blog/tags/${_.kebabCase(tag.replace(' ', '-'))}/`,
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
