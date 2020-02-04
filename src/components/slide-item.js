import React from "react";
import Fade from 'react-reveal/Fade';
import styled from "styled-components";
import Img from 'gatsby-image';

import { STYLE } from './../consts';

const StSlide = styled.figure`
position: relative;
height: 450px;
overflow: hidden;
`;
const StImg = styled.img`
object-fit: cover;
width: 100%;
height: 100%;
transition: ${STYLE.TRANSITION_TIME};
&:hover {
    transform: scale(1.1)
}
`;
const StFigcaption = styled.figcaption`
position: absolute;
bottom: 0;
left: 0;
padding: ${STYLE.GAP_1};
background: ${STYLE.BACKGROUND_1}${STYLE.OPACITY};
& > p {
    font-size: ${STYLE.FONT_SIZE_SMALL};
    line-height: ${STYLE.LINE_HEIGHT_SMALL};
}
`;

const SlideItem = ({
  id,
  title,
  content,
  image,
}) => (
    <StSlide key={ id }>
        <StImg as={ Img } key={ id } fluid={ image } />
        <StFigcaption>
            <p>{ content }</p>
            <h3>{ title }</h3>
        </StFigcaption>
    </StSlide>
)
export default SlideItem;