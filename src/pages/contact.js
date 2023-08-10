import React from 'react'
import Layout from "../components/Layout"
import { graphql } from 'gatsby'
import RecipesList from '../components/RecipesList'
import SEO from '../components/SEO'

const Recipes = ({ data: { allContentfulRecipes: { nodes: recipes } } }) => {
    return (
        <Layout>
            <SEO title="Contact" />
            <main className="page">
                <section className="contact-page">
                    <article className='contact-info'>
                        <h3>Want to get in touch?</h3>
                        <p>Four dollar toast biodiesel plaid salvia actually pickled banjo bespoke mlkshk intelligentsia edison bulb synth.</p>
                        <p>Cardigan prism bicycle rights put a bird on it deep v.</p>
                        <p>Hashtag swag health goth air plant, raclette listicle fingerstache cold-pressed fanny pack bicycle rights cardigan poke.</p>
                        <form action=""></form>
                    </article>
                    <article>
                        <form className="form contact-form"
                        // action='*endpoint*'
                        // method='POST'
                        >
                            <div className="form-row">
                                <label className='form-label' htmlFor="name">your name</label>
                                <input className='form-input' type="text" name="name" id="name" />
                            </div>
                            <div className="form-row">
                                <label className='form-label' htmlFor="email">your email</label>
                                <input className='form-input' type="text" name="email" id="email" />
                            </div>
                            <div className="form-row">
                                <label className='form-label' htmlFor="message">your email</label>
                                <textarea className='form-textarea' name="message" id="message" ></textarea>
                            </div>
                            <button type="submit" className='btn block'>Submit</button>
                        </form>
                    </article>
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
export default Recipes

