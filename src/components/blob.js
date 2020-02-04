import React from "react";
import styled, { keyframes } from "styled-components";

const borderTransform = keyframes`
0%,100% { border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%; } 
14% { border-radius: 40% 60% 54% 46% / 49% 60% 40% 51%; } 
28% { border-radius: 54% 46% 38% 62% / 49% 70% 30% 51%; } 
42% { border-radius: 61% 39% 55% 45% / 61% 38% 62% 39%; } 
56% { border-radius: 61% 39% 67% 33% / 70% 50% 50% 30%; } 
70% { border-radius: 50% 50% 34% 66% / 56% 68% 32% 44%; } 
84% { border-radius: 46% 54% 50% 50% / 35% 61% 39% 65%; } 
`;
const StyledBlob = styled.div`
position: absolute;
top: ${({ top }) => top};
left: ${({ left }) => left};
transform: translate(-50%, -50%);
height: ${({ size }) => size}px;
width: ${({ size }) => size*1.25}px;
transition : all 0.3s ease-out;
z-index: 9999;
&::after {
	position: absolute;
	content: '';
	width: inherit;
	height: inherit;
	background-image: linear-gradient(160deg, ${({ color1 }) => color1}, ${({ color2 }) => color2});
	animation: ${borderTransform} 10s linear infinite alternate forwards;
    transition: all 200ms linear;
}
`;


const Blob = ({ size, top, left, bottom, right, color1, color2 }) => {
    return (
        <StyledBlob
            size={ size || 200 }
            top={ top || '0' }
            left={ left || '0' }
            color1={ color1 || '#f00c' }
            color2={ color2 || '#00f5' }
            />
  )
};
export default Blob;