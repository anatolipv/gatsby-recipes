const path = require('path') //import { resolve } from 'path'
const slugify = require('slugify')




exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
query GetRecipes {
    allContentfulRecipes {
      nodes {
        content {
          tags
        }
      }
    }
  }
`)
  result.data.allContentfulRecipes.nodes.forEach(recipe => {
    recipe.content.tags.forEach(tag => {
      const tagSlug = slugify(tag, { lower: true })
      createPage({
        path: `/tags/${tagSlug}`,
        component: path.resolve(`./src/templates/tag-template.js`),
        context: {
          tag: tag,
        }
      })
    })
  })
}
