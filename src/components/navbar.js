import React from "react";
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import styled from "styled-components";

import { STYLE } from './../consts';

const StyledNav = styled.nav`
position: sticky;
top: 0;
left: 0;
background: ${ STYLE.BACKGROUND_1 };
z-index: 99;
`;
const Ul = styled.ul`
list-style-type: none;
display: flex;
& > li > .active {
    background: ${ STYLE.BACKGROUND_2 };
    text-shadow: ${ STYLE.TEXT_SHADOW };
}
${STYLE.BP_MOBILE} {
    flex-direction: column;
}
`;
const A = styled.a`
display: block;
padding: ${STYLE.GAP_2};
color: inherit;
font-size: ${STYLE.NAV_SIZE};
border-right: 1px dotted;
cursor: pointer;
`;


const NavBar = ({ siteTitle }) => (
    <StyledNav>
        <Ul>
            <li><A href="tel:+375336889779">+375 33 688 97 79</A></li>
            <li><A as={ Link } to="photos" spy={ true } smooth={ true } duration={ 500 }>Фото</A></li>
            <li><A as={ Link } to="designs" spy={ true } smooth={ true } offset={ -128 } duration={ 500 }>Дизайн</A></li>
            <li><A as={ Link } to="shops" spy={ true } smooth={ true } offset={ -128 } duration={ 500 }>Магазины</A></li>
            <li><A as={ Link } to="contacts" spy={ true } smooth={ true } offset={ -128 } duration={ 500 }>Контакты</A></li>
        </Ul>
    </StyledNav>
);
export default NavBar;