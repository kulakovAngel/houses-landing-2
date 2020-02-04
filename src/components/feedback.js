import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { STYLE } from './../consts';

const StyledFeedback = styled.div`
background: ${STYLE.BACKGROUND_2};
display: flex;
${STYLE.BP_MOBILE} {
    flex-direction: column;
    & > *:not(:last-child) {
        border-bottom: 1px solid ${STYLE.BACKGROUND_1};
    }
}
${STYLE.BP_DESKTOP} {
    flex-direction: row;
    & > *:not(:last-child) {
        border-right: 1px solid ${STYLE.BACKGROUND_1};
    }
}
& > * {
    flex: 1 1 50%;
}
`;
const Form = styled.form`
display: flex;
flex-direction: column;
padding: ${STYLE.GAP_3};
`;
const Input = styled.input`
background: inherit;
border: none;
border-bottom: 1px dotted;
padding: ${STYLE.GAP_1};
margin: ${STYLE.GAP_2};
outline: none;
color: inherit;

&:focus { border: 1px solid; }

&::-moz-placeholder { color: ${STYLE.COLOR_2}; }
&::-webkit-input-placeholder { color: ${STYLE.COLOR_2}; }
&:-ms-input-placeholder { color: ${STYLE.COLOR_2}; }
&::-ms-input-placeholder { color: ${STYLE.COLOR_2}; }
&::placeholder { color: ${STYLE.COLOR_1}; }

&[type='submit'] {
    border: 1px solid;
}
`;
const Ul = styled.ul`
display: flex;
flex-direction: column;
list-style-type: none;
`;
const Li = styled.li`
display: flex;
flex-direction: column;
list-style-type: none;
padding: ${STYLE.GAP_3};
&:not(:last-child) {
    border-bottom: 1px solid ${STYLE.BACKGROUND_1};
}
`;
const Header = styled.header`
display: flex;
& > div {
    flex: 0 0 32px;
}
`;
const H4 = styled.h4`
margin: 0 ${STYLE.GAP_1};
`;
const FormHeading = styled.h4`
text-align: center;
`;

export const fluidImage = graphql`
    fragment fixedImage on File {
            childImageSharp {
                fixed(width: 32) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    `;

const Feedback = () => {
    const data = useStaticQuery(graphql`
        query {
            call: file(relativePath: { eq: "call-icon.png" }) {
                ...fixedImage
            }
            mail: file(relativePath: { eq: "mail-icon.png" }) {
                ...fixedImage
            }
            map: file(relativePath: { eq: "map-icon.png" }) {
                ...fixedImage
            }
        }
  `);
    return (
        <StyledFeedback>
            <Form data-netlify='true' name='houses_feedback'>
                <FormHeading>Feedback Form</FormHeading>
                <input type='hidden' name='form-name' value='houses_feedback' />
                <Input type='text' placeholder='Name*' name='name' />
                <Input type='tel' placeholder='Phone*' name='phone' />
                <Input as='textarea' placeholder='Message*' name='message' />
                <Input type='submit' />
            </Form>
            <div>
                <Ul>
                    <Li>
                        <Header>
                            <Img fixed={ data.call.childImageSharp.fixed } />
                            <H4>Email</H4>
                        </Header>
                        <p>houses.for.sale@gmail.com</p>
                    </Li>
                    <Li>
                        <Header>
                            <Img fixed={ data.mail.childImageSharp.fixed } />
                            <H4>Phone</H4>
                        </Header>
                        <p>+375257300310</p>
                    </Li>
                    <Li>
                        <Header>
                            <Img fixed={ data.map.childImageSharp.fixed } />
                            <H4>Address</H4>
                        </Header>
                        <p>Hrodno, Belarus</p>
                    </Li>
                </Ul>
            </div>
        </StyledFeedback>
  )
}
export default Feedback;