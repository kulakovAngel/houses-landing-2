import React from "react";
import styled from "styled-components";

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
`;


const Grid = ({ children }) => {
    return (
        <StyledGrid>
            { children }
        </StyledGrid>
  )
}
export default Grid;