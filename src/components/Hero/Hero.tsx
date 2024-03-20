
import { Swiper, SwiperSlide, } from "swiper/react";

import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Button from "../Button/Button";
import Container from "../Container/Container";
import knifeImg from '../../img/hero-1.png';
import foldingKnifeImg from '../../img/hero-2.png';
import cookDeviceImg from '../../img/hero-4.png';
import styled from "styled-components";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const SliderStyle = styled.div<{url: string}>`

background-image: url(${props => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 590px;

`
const SliderContentWrap = styled.div`
max-width: 580px;
padding: 150px 0 0 190px;
@media screen and (max-width:968px){
  padding: 73px 0 0 15px;
}
`
const TitleSliderWrapStyle = styled.div`
max-width: 580px;

.hero__slider-title{
  font-family: 'Jura', san-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 41px;
  line-height: 1.17;
  color: #fff;
  text-transform: uppercase;
  @media screen and (max-width:968px){
    font-size: 20px;
  }
}


`
const TextSliderWrapStyle = styled.div`
padding: 24px 0 0 0;
max-width: 446px;
.hero__slider-text{
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 1.21;
  color:#fff;
  margin-top:24px;
  
}
@media screen and (max-width:968px){
  max-width: 300px;
  .hero__slider-text{
    font-size: 16px;
  }
  
}
`


const PaginationStyle = styled.div`
  .swiper-pagination{
    margin-bottom: 76px ;
  }
  .swiper-pagination-bullet {
    background-color: #fff;
    width: 19px;
    height: 19px;
    
  }

  .swiper-pagination-bullet-active {
    background-color: white;
    color: #fff;
  }
 
}
`;
const CustomNavigationButton = styled.div`
  .swiper-button-prev,
  .swiper-button-next {
    color: #fff;
    background-color: transparent;
    ba
    font-size: spx;
    transition: color 0.3s;
    margin-top: 170px;
    &:hover {
      color: #ff0000; 
    }
  }
`;
const Hero = (): JSX.Element=>{

    const pagination = {
        clickable: true,
        renderBullet: function (index: number, className: string) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      };


    return(
        <>
        <CustomNavigationButton>
        <PaginationStyle>
            <Swiper
              pagination={pagination}
              navigation={true}
              
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              
              <SwiperSlide>
                <SliderStyle url={knifeImg}>
                    <SliderContentWrap>
                        <TitleSliderWrapStyle>
                          <h2 className="hero__slider-title">Виняткова якість без компромісів</h2>
                        </TitleSliderWrapStyle>
                        <TextSliderWrapStyle>
                          <p className="hero__slider-text">Ножі "Knifetown" - це головний інструмент кухарів і секрет кулінарної майстерності</p>
                        </TextSliderWrapStyle>
                        <Button margin='40px 0 0'>детальніше</Button>
                    </SliderContentWrap>
                  </SliderStyle>
                  
              </SwiperSlide>

              <SwiperSlide>
                <SliderStyle url={foldingKnifeImg}>
                    <SliderContentWrap>
                        <TitleSliderWrapStyle>
                          <h2 className="hero__slider-title">Виняткова якість без компромісів</h2>
                        </TitleSliderWrapStyle>
                        <TextSliderWrapStyle>
                          <p className="hero__slider-text">
                            Складні ножі "Knifetown" - практичні та зручні інструменти, що займають мало місця та легко поміщаються в кишеню чи сумку завдяки складним механізмам.</p>
                        </TextSliderWrapStyle>
                        <Button margin='40px 0 0'>детальніше</Button>
                    </SliderContentWrap>
                  </SliderStyle>
              </SwiperSlide>

              <SwiperSlide>
                      <SliderStyle url={knifeImg}>
                    <SliderContentWrap>
                        <TitleSliderWrapStyle>
                          <h2 className="hero__slider-title">Виняткова якість без компромісів</h2>
                        </TitleSliderWrapStyle>
                        <TextSliderWrapStyle>
                          <p className="hero__slider-text">Ножі "Knifetown" - це головний інструмент кухарів і секрет кулінарної майстерності</p>
                        </TextSliderWrapStyle>
                        <Button margin='40px 0 0'>детальніше</Button>
                    </SliderContentWrap>
                  </SliderStyle>
              </SwiperSlide>

              <SwiperSlide>   
              <SliderStyle url={cookDeviceImg}>
                    <SliderContentWrap>
                        <TitleSliderWrapStyle>
                          <h2 className="hero__slider-title">Виняткова якість без компромісів</h2>
                        </TitleSliderWrapStyle>
                        <TextSliderWrapStyle>
                          <p className="hero__slider-text">Аксесуари для кухні "Knifetown" - якісні, практичні та зручні інструменти, що займають мало місця на кухні.</p>
                        </TextSliderWrapStyle>
                        <Button margin='40px 0 0'>детальніше</Button>
                    </SliderContentWrap>
                  </SliderStyle> 
              </SwiperSlide>
            </Swiper>
            
      </PaginationStyle>
      </CustomNavigationButton>
    </>
    )
}

export default Hero;
