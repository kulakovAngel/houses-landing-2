import React from "react";
import styled from "styled-components";

import { STYLE } from './../consts';
import Blob from "./blob";


import banner1 from '../images/banner1.jpg';
import banner2 from '../images/banner2.jpg';

const StyledHeader = styled.header`
    background: linear-gradient(45deg, rgba(32,39,66,0.9), rgba(32,39,66,0.5)), url('${banner1}');
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 256px 0;
`;
const H1 = styled.h1`
text-align: center;
border: 1px solid;
background: rgba(32,39,66,0.4);
padding: ${STYLE.GAP_3};
margin: ${STYLE.GAP_3};
${STYLE.BP_MOBILE} {
    padding: ${STYLE.GAP_1};
    margin: ${STYLE.GAP_1};
}
`;


const Header = () => (
    <StyledHeader>
        <Blob
            size={ 350 }
            top='40%'
            left='20%'
            color1={ STYLE.BACKGROUND_1+'44' }
            color2={ STYLE.BACKGROUND_2+'bb' }
            />
        <Blob
            size={ 300 }
            top='10%'
            left='70%'
            color1={ STYLE.BACKGROUND_1+'66' }
            color2={ STYLE.BACKGROUND_2+'33' }
            />
        <Blob
            size={ 250 }
            top='55%'
            left='80%'
            color1={ STYLE.BACKGROUND_1+'aa' }
            color2={ STYLE.BACKGROUND_2+'44' }
            />
        <H1>
            Комплексные ремонты квартир и домов
        </H1>
        
    </StyledHeader>
);
export default Header;