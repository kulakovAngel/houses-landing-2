import React from "react";
import styled from "styled-components";

import { STYLE } from './../consts';

const StyledFooter = styled.footer`
background: #242943;
display: flex;
border-top: 1px solid ${STYLE.BACKGROUND_1};
${STYLE.BP_MOBILE} {
    flex-direction: column;
}
${STYLE.BP_DESKTOP} {
    flex-direction: row;
}
`;
const Section = styled.section`
flex: 0 0 50%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 100px 0;
${STYLE.BP_MOBILE} {
    grid-column: span 12;
    &:not(:last-child) {
        border-bottom: 1px solid ${STYLE.BACKGROUND_1};
        
    }
}
${STYLE.BP_DESKTOP} {
    grid-column: span ${props => props.col};
    &:not(:last-child) {
        border-right: 1px solid ${STYLE.BACKGROUND_1};
    }
}
`;


const Footer = () => (
    <StyledFooter>
        <Section>
            <h6>© {new Date().getFullYear()}, CoolSoft</h6>
            Hrodno, Belarus<br />
            +375 29 2970770<br />
            kulakov.angel@gmail.com
        </Section>
        <Section>
            <h6>© Houses for sale</h6>
            Hrodno, Belarus<br />
            +375 25 7300310<br />
        </Section>
    </StyledFooter>
);
export default Footer;