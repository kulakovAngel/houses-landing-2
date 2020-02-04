import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export const fluidImage = graphql`
    fragment fluidImage on File {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    `;
/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = ({name}) => {
    
    const data = useStaticQuery(graphql`
        query {
            image1: file(relativePath: { eq: "house-1.jpg" }) {
                ...fluidImage
            }
            image2: file(relativePath: { eq: "house-2.jpg" }) {
                ...fluidImage
            }
            image3: file(relativePath: { eq: "house-3.jpg" }) {
                ...fluidImage
            }
            image4: file(relativePath: { eq: "house-4.jpg" }) {
                ...fluidImage
            }
        }
  `);
  

  return <Img fluid={data.image1.childImageSharp.fluid} />
}

export default Image;