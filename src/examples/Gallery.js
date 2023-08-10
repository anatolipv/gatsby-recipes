import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import { styled } from 'styled-components'

const query = graphql`
  query {
    allFile(filter: {extension: {ne: "svg"}}) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED
            width:200
            height:200
          )
        }
      }
    }
  }
`
// transformOptions: {grayscale: true}


const Gallery = () => {
    const data = useStaticQuery(query)
    const nodes = data.allFile.nodes
    console.log(data);
    return (
        <Wrapper>
            {nodes.map((image, index) => {
                const { name } = image
                const pathToImage = getImage(image)
                return <article className='item' key={index}>
                    <GatsbyImage
                        image={pathToImage} //image.childImageSharp.gatsbyImageData
                        alt={name}
                        className='gallery-img' />
                    <p>{name}</p>
                </article>
            })}
        </Wrapper>
    )
}

const Wrapper = styled.section`
display: flex;
flex-wrap: wrap;
.item{
    margin-right:1rem
}
.gallery-img{
    border-radius: 1rem;
}
`

export default Gallery
