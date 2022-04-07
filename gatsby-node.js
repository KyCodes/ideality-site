const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
  {
    allWpPage {
      edges {
        node {
          content
          slug
          title
        }
      }
    }
    allWpPost {
      edges {
        node {
          content
          slug
          title
        }
      }
    }
  }
  `)
  result.data.allWpPage.edges.forEach((edge) => {
    createPage({
      path: '/' + edge.node.slug,
      component: path.resolve(`./src/pages/default.tsx`),
      context: {
        title: edge.node.title,
        content: edge.node.content
      },
    })
  })
  result.data.allWpPost.edges.forEach((edge) => {
    createPage({
      path: '/' + edge.node.slug,
      component: path.resolve(`./src/pages/default.tsx`),
      context: {
        title: edge.node.title,
        content: edge.node.content
      },
    })
  })
}