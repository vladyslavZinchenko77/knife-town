import styled from "styled-components";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Container from "../../components/Container/Container";
import EmailNewsInput from "../../components/EmailNewsInput/EmailNewsInput";
import Map from "./components/Map";
import BackgroundColor from "../../components/BackgroundColor/BackgroundColor";
import img1 from '../../img/blog-cook-knife2.png';
import img2 from '../../img/blog-cook-knife3.png';



const TitleLocationStyle = styled.h2`
margin-top: 62px;
font-family: 'Jura';
font-weight: 500;
font-size: 32px;
line-height: 1.2;
color: #FFFFFF;
display:flex;
justify-content: center;
padding: 30px 0 30px 0;
background-color:  #373737;;

`
const PosterWrapStyle = styled.div`
padding-top:90px;
.poster__item{
    display: flex;
    gap: 120px;
    align-items: center;

    .poster__item-title--wrap{
        
        .poster__item-title{
            font-family: 'Jura';
            font-weight: 500;
            font-size: 24px;
            line-height: 1.16;
            text-transform: uppercase;
            color: #FFFFFF;
    
        }
        .poster__item-text{
            font-family: 'Montserrat';
            font-weight: 400;
            font-size: 16px;
            line-height: 1.25;
            color: #FFFFFF;
            margin-top: 24px;
        }
    }
    .poster__item-img{
        width: 50%;
    }
    @media screen and (max-width: 768px){
        flex-direction: column;
        .poster__item-img{
            width: 100%;
        }
        .poster__item-title--wrap.hide{
            display: none;
        }
        .poster__item-title--wrap{
           margin-top: 30px;
           text-align: center;
        }
    }
}
`
interface LocationPageProps{
    selectFoldingKnifes():void;
    selectKnifes():void;
    selectSharpeners():void;
    selectAccessories():void;
}


const LocationPage: React.FC<LocationPageProps> = ({selectFoldingKnifes, selectKnifes,
    selectSharpeners,selectAccessories}):JSX.Element =>{
    return(
        <div>
            <Header selectFoldingKnifes={selectFoldingKnifes} 
                    selectKnifes={selectKnifes}
                    selectSharpeners={selectSharpeners}
                    selectAccessories={selectAccessories} />
                    <TitleLocationStyle>Карта</TitleLocationStyle>

                        <BackgroundColor backgroundColor="#272727">
                            <Container padding="120px 0 70px 0">
                                <Map/>
                            </Container>
                        </BackgroundColor>
                    <BackgroundColor>
                    <Container> 
                    <PosterWrapStyle>
                        <div className="poster__item">
                            <img className="poster__item-img" src={img1} alt="img1" />
                            <div className="poster__item-title--wrap hide">
                                <h4 className="poster__item-title">ВИНЯТКОВА ЯКІСТЬ БЕЗ КОМПРОМІСІВ</h4>
                                <p className="poster__item-text">Ножі "Knifetown" - це головний інструмент кухарів і секрет кулінарної майстерності</p>
                            </div>
                            
                        </div>
                        <div className="poster__item">
                            <div className="poster__item-title--wrap">
                                <h4 className="poster__item-title">ВИНЯТКОВА ЯКІСТЬ БЕЗ КОМПРОМІСІВ</h4>
                                <p className="poster__item-text">Ножі "Knifetown" - це головний інструмент кухарів і секрет кулінарної майстерності</p>
                            </div>
                            <img className="poster__item-img" src={img2} alt="img2" />
                        </div>
                    </PosterWrapStyle>
                    <EmailNewsInput/>
                </Container>
                </BackgroundColor>
            <Footer/>
        </div>
    )
}

export default LocationPage;