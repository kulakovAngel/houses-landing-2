import React from "react";
import { graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';
import styled from "styled-components";
import Img from 'gatsby-image';

import Layout from "./../components/layout";
import Grid from "./../components/grid";
import GridItem from "./../components/grid-item";
import Tile from "./../components/tile";
import NavBar from "./../components/navbar";
import Slider from "./../components/Slider";
import SlideItem from "./../components/slide-item";

import { STYLE } from './../consts';

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
    @media (max-width: 768px) {
        grid-column: span 12;
    }
    @media (min-width: 769px) {
        grid-column: span ${props => props.col};
    }
`;
const Slide = styled.figure`
position: relative;
height: 450px;
overflow: hidden;
&:hover > .gatsby-image-wrapper {
    transform: scale(1.1);
}
`;
const StImg = styled.img`
object-fit: cover;
width: 100%;
height: 100%;
transition: ${STYLE.TRANSITION_TIME};
&:hover {
    transform: scale(1.1);
}
`;
const StFigcaption = styled.figcaption`
position: absolute;
bottom: 0;
left: 0;
width: 100%;
padding: ${STYLE.GAP_1};
background: ${STYLE.BACKGROUND_1}${STYLE.OPACITY};
& > p {
    font-size: ${STYLE.FONT_SIZE_SMALL};
    line-height: ${STYLE.LINE_HEIGHT_SMALL};
}
`;
const StFigcaption2 = styled.figcaption`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: flex-end;
padding: ${STYLE.GAP_1};
background: linear-gradient(to top, ${STYLE.BACKGROUND_1}${STYLE.OPACITY}, transparent);
transition: ${STYLE.TRANSITION_TIME};
&:hover {
    transform: translateY(50%);
}
& > p {
    font-size: ${STYLE.FONT_SIZE_SMALL};
    line-height: ${STYLE.LINE_HEIGHT_SMALL};
}
`;
const Discount = styled.div`
background: #fe5741;
display: flex;
flex-direction: column;
width: 500px;
padding: 35px;
font-size: 128px;
position: relative;
&:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border: 1px solid;
}
& > h3 {
    font-size: 64px;
}
`;

const IndexPage = ({ data }) => {
    return (
        <Layout seo={{
            title: 'Home Page',
            description: 'Houses for sale',
            keywords: 'Houses, sale, Hrodno',
        }}>
            <NavBar />
            <section id='photos'>
                <h2>Фотографии</h2>
                <Slider>
                    {
                        data.allStrapiPhotos.edges.map((item, i) => (
                            <Slide key={ item.node.id }>
                                <StImg as={ Img } fluid={ item.node.photo_image.childImageSharp.fluid } />
                                <StFigcaption>
                                    <p>{ item.node.content }</p>
                                    <h3>{ item.node.title }</h3>
                                </StFigcaption>
                            </Slide>
                        ))
                    }
                </Slider>
            </section>
            <section id='designs'>
                <h2>Разработка дизайн-проектов</h2>
                <Slider>
                    {
                        data.allStrapiDesigns.edges.map((item, i) => (
                            <Slide key={ item.node.id }>
                                <StImg as={ Img } fluid={ item.node.design_image.childImageSharp.fluid } />
                                <StFigcaption2>
                                    <p>{ item.node.content }</p>
                                    <h3>{ item.node.title }</h3>
                                </StFigcaption2>
                            </Slide>
                        ))
                    }
                </Slider>
            </section>
            <section id='shops'>
                <div>
                    <h2>Магазины-партнеры</h2>
                    <Discount>
                        <span>15%</span>
                        <h3>SкиDка</h3>
                    </Discount>
                </div>
                <Slider>
                    {
                        data.allStrapiShops.edges.map((item, i) => (
                            <Slide key={ item.node.id }>
                                <StImg as={ Img } fluid={ item.node.shop_image.childImageSharp.fluid } />
                                <StFigcaption>
                                    <p>{ item.node.content }</p>
                                    <h3>{ item.node.title }</h3>
                                </StFigcaption>
                            </Slide>
                        ))
                    }
                </Slider>
            </section>
            <section id='contacts'>
                <h2>Ждем Вас!</h2>
                <a href='tel:+375336889779'>+375 33 688 97 79</a><br />
                <a href='tel:+375336884777'>+375 33 688 47 77</a>
            </section>
        </Layout>
    )
};
export default IndexPage;

export const pageQuery = graphql`  
  query IndexQuery {
    allStrapiPhotos {
      edges {
        node {
          id,
          title,
          content,
          photo_image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    allStrapiDesigns {
      edges {
        node {
          id,
          title,
          content
          design_image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    allStrapiShops {
      edges {
        node {
          id,
          title,
          content
          shop_image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;


//
//    allStrapiPhotos {
//      edges {
//        node {
//          title,
//          image {
//            childImageSharp {
//              fixed(width: 200, height: 125) {
//                ...GatsbyImageSharpFixed
//              }
//            }
//          }
//        }
//      }
//    }

//            <Grid>
//                {
//                    items.map((item, i) => (
//                        <GridItem col={ item.cols } key={ item.title }>
//                            <Fade { ...(i%2 ? {right: 'true'} : {left: 'true'}) }>
//                                <Tile
//                                   img={ item.img }
//                                   color={ item.color }
//                                   title={ item.title }
//                                   text={ item.text } />
//                            </Fade>
//                        </GridItem>
//                    ))
//                }
//            </Grid>