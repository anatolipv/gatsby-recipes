import { graphql } from 'gatsby';
import React from 'react'
import RecipesList from '../components/RecipesList'
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const TagTemplate = ({ data, pageContext }) => {
  const recipes = data.allContentfulRecipes.nodes
  // console.log(pageContext);
  return (
    <Layout>
      <SEO title={pageContext.tag} />
      <main className="page">
        <h2>{pageContext.tag}</h2>
        <div className="tag-recipes">
          <RecipesList recipes={recipes} />
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
query GetRecipesByTag($tag:String) {
    allContentfulRecipes(sort: {title: ASC}, filter: {content: {tags: {eq: $tag}}}) {
      nodes {
        title
        id
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`
export default TagTemplate
