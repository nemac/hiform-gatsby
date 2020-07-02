/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const frontPageTemplate = path.resolve(`./src/templates/index.js`)
  const eventTemplate = path.resolve(`./src/templates/event.js`)
  const markdownTemplate = path.resolve(`./src/templates/markdown.js`)
  const result = await graphql(
    `
      {
        severeWeather: allMarkdownRemark(filter: {fields: {slug: {eq: "/severeWeather/"}}}) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
        wildlandFire: allMarkdownRemark(filter: {fields: {slug: {eq: "/wildlandFire/"}}}) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
        insectsAndDiseases: allMarkdownRemark(filter: {fields: {slug: {regex: "/insectsAndDiseases/"}}}) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
        landscapeDiversity: allMarkdownRemark(filter: {fields: {slug: {regex: "/landscapeDiversity/"}}}) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
        frontPage: allMarkdownRemark(filter: {fields: {slug: {regex: "/index/"}}}) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
        event: allMarkdownRemark(filter: {fields: {slug: {regex: "/event/"}}}) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
      
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create front page.
  result.data.frontPage.edges.forEach(({ node }) => {
    createPage({
      path: '/',
      component: frontPageTemplate,
      context: {
        slug: node.fields.slug,
      },
    })
  })

  // Create severe weather page.
  result.data.severeWeather.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: markdownTemplate,
      context: {
        slug: node.fields.slug,
      },
    })
  })

  // Create wildland fire page.
  result.data.wildlandFire.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: markdownTemplate,
      context: {
        slug: node.fields.slug,
      },
    })
  })

  // Create insects and diseases pages.
  result.data.insectsAndDiseases.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: markdownTemplate,
      context: {
        slug: node.fields.slug,
      },
    })
  })

  // Create landscape diversity pages.
  result.data.landscapeDiversity.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: markdownTemplate,
      context: {
        slug: node.fields.slug,
      },
    })
  })

  // Create all event pages.
  result.data.event.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: eventTemplate,
      context: {
        slug: node.fields.slug,
      },
    })
  })
}

const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node);

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}