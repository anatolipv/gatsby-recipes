import React from 'react'
import Layout from "../components/Layout"
import { StaticImage } from 'gatsby-plugin-image'
import { Link, graphql } from 'gatsby'
import RecipesList from '../components/RecipesList'
import SEO from '../components/SEO'


const About = ({ data: { allContentfulRecipes: { nodes: recipes } } }) => {
  return (
    <Layout>
      <SEO title="About" description="About page" />
      <main className="page">
        <section className="about-page">
          <article>
            <h2>I`m baby coloring book poke taxidermy</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste harum facilis possimus saepe quae ab nisi deleniti consequatur at?</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam laborum ipsa aut magni iste asperiores.</p>
            <Link to='/contact' className='btn'>
              contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="Person Pouring Salt in Bowl"
            className='about-img'
            placeholder='blurred'
          />
        </section>
        <section className="featured-recipes">
          <h5>Look at this Awesomesouce!</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulRecipes(sort: {title: ASC}, filter: {featured: {eq: true}}) {
      nodes {
        id
        title
        prepTime
        cookTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default About
