import React from "react";
import styled from "styled-components";

import { STYLE } from "./../consts";

console.log(STYLE.BP_MOBILE);
const StyledGridItem = styled.div`
    display: flex;
    justify-content: stretch;
    align-items: stretch;
    & > * {
        flex: 1 1 auto;
        display: flex;
        justify-content: stretch;
        align-items: stretch;
    }
    ${STYLE.BP_MOBILE} {
        grid-column: span 12;
    }
    ${STYLE.BP_DESKTOP} {
        grid-column: span ${props => props.col};
    }
`;


const GridItem = ({ col, children }) => {
    return (
        <StyledGridItem col={ col }>
            { children }
        </StyledGridItem>
  )
}
export default GridItem;