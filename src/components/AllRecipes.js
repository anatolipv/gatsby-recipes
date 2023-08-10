import React from 'react'
import TagsList from './TagsList'
import RecipesList from './RecipesList'
import { graphql, useStaticQuery } from 'gatsby'

const query = graphql`
  query {
    allContentfulRecipes(sort: {title: ASC}) {
      nodes {
        id
        title
        prepTime
        cookTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`
const AllRecipes = () => {
  const { allContentfulRecipes: { nodes: recipes } } = useStaticQuery(query)
  // const recipes = data.allContentfulRecipes.nodes
  // console.log(recipes);
  return (
    <section className='recipes-container'>
      <TagsList recipes={recipes} />
      <RecipesList recipes={recipes} />
    </section>
  )
}

export default AllRecipes
