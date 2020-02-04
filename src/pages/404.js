import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "./../components/layout";

const P = styled.p`
margin: 128px 128px 0 40%;
`;

export const fluidImage = graphql`
    fragment fluidImage on File {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    `;

const NotFoundPage = () => {
    const data = useStaticQuery(graphql`
        query {
            not_found: file(relativePath: { eq: "not_found.svg" }) {
                ...fluidImage
            }
        }
  `);
    return (
        <Layout>
            <h1>Such a page not found...</h1>
            <P>How did You get here??!</P>
        </Layout>
    );
};
export default NotFoundPage;