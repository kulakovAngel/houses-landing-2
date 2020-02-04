import React from "react";
import styled from "styled-components";
import Swiper from 'react-id-swiper';
import 'react-id-swiper/lib/styles/css/swiper.css';

import { STYLE, RAW_STYLES } from './../consts';

const params = {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
//    autoplay: {
//        delay: 2500,
//        disableOnInteraction: false
//      },
    mousewheel: true,
//    spaceBetween: RAW_STYLES.GAP_3,
//    slidesPerView: 3,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
      },
    breakpoints: {
        [1280]: {
          slidesPerView: 3,
          spaceBetween: RAW_STYLES.GAP_2
        },
        [RAW_STYLES.BP_MOBILE + 1]: {
          slidesPerView: 2,
          spaceBetween: RAW_STYLES.GAP_2
        },
        0: {
          slidesPerView: 1,
          spaceBetween: RAW_STYLES.GAP_2
        },
    }
}

const Slider = ({ children }) => (
    <Swiper { ...params }>
        {
            children.map(item => item)
        }
    </Swiper>
);
export default Slider;