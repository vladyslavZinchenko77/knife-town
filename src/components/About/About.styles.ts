import styled from "styled-components";


export const AboutAddaptive = styled.div`


@media screen and (min-width: 979px){
  
    .about__bottom-title--full{
        display: block;
    }
    .about__bottom-title--tablet{
        display: none;
    }
  }
@media screen and (min-width: 769px) and (max-width: 978px){
    .about__bottom-title--full{
        display: none;
    }
    .about__bottom-title--tablet{
        display: block;
    }
    }
@media screen and (min-width: 320px) and (max-width: 768px){
        display: none;
    }
}
.about__bottom-title--full{}
.about__bottom-title--mobile{}
`
export const TitleStyle = styled.h2`
font-family: 'Jura';
font-style: normal;
font-weight: 500;
font-size: 35px;
line-height: 1.2;
color: #FFFFFF;
`
export const DescStyle = styled.p`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 1.38;
color: #FFFFFF;

`
export const AboutImgStyle = styled.img`
 width: 100%;
 height: 100%;
`