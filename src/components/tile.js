import React from "react";
import styled from "styled-components";

const StyledTile = styled.div`
background: url(${props => props.img});
background-position: center center;
background-size: cover;
background-repeat: no-repeat;
padding: 150px 10px;
transition: 0.3s;
position: relative;
flex: 1 1 auto;
&:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: ${props => props.color}dd;
    transition: 0.3s;
}
&:hover:before {
    background: ${props => props.color}00;
}
& > * {
    color: #202742;
}
&:hover > * {
    background: ${props => props.color}dd;
    box-shadow: 0px 0px 6px 6px ${props => props.color}dd;
}
`;
const H2 = styled.h2`
position: relative;
&:after {
content: '';
display: block;
width: 60%;
border-bottom: 8px solid;
}
`;
const P = styled.p`
position: relative;
`;

const Tile = ({ img, color, title, text }) => {
    return (
        <StyledTile img={ img } color={ color }>
            <H2>{ title }</H2>
            <P>{ text }</P>
        </StyledTile>
  )
}
export default Tile;