import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'

const query = graphql`
  query {
    site(siteMetadata: {}) {
      siteMetadata {
        description
        title
      }
    }
  }
`

const SEO = ({ title, description }) => {
    const { site } = useStaticQuery(query)
    const metaDescription = description || site.siteMetadata.description
    return (
        <Helmet htmlAttributes={{ lang: "en" }}
            title={`${title} | ${site.siteMetadata.title}`}
            meta={[{ name: `description`, content: metaDescription }]}>

        </Helmet>
    )
}


export default SEO
