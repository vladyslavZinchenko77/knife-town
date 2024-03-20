import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import BackgroundColor from "../BackgroundColor/BackgroundColor";
import Container from "../Container/Container";
import Flex from "../Flex/Flex";
import { ReactComponent as InstagramIcon } from "../../svg/social-icons/instagram.svg";
import { ReactComponent as FacebookIcon } from "../../svg/social-icons/facebook.svg";
import { ReactComponent as YoutubeIcon } from "../../svg/social-icons/youtube.svg";
import { ReactComponent as LinkedinIcon } from "../../svg/social-icons/linkedin.svg";
import { TextStyle,TitleStyle,TitleNavStyle,NavItemStyle,FooterStyles,FooterInfoStyles,FooterNavStyles,SocialIconsStyles,ContactTextStyle,EmailTextStyle, PhoneTextStyle  } from "./Footer.style";



const Footer = ()=>{
    return(
      <BackgroundColor backgroundColor="#272727">
        
        
            <Container>
                <FooterStyles>
                    <FooterInfoStyles>
                        <Flex>
                            <Logo/>
                            <TitleStyle style={{paddingLeft: '26px'}} >легендарні ножі, що створюють шедеври</TitleStyle>
                        </Flex>
                        <TextStyle>
                        Компанія «Knifetown» - ексклюзивний представник професійних кухонних ножів, виготовлених найкращими майстрами Східної Азії із застосуванням передового європейського обладнання та сучасних матеріалів.</TextStyle> 

                        <TextStyle>Вони вирізняються ідеальним балансом і фантастичною гостротою. Поєднують у собі вікові традиції та новітні розробки. Також пропонуємо широкий асортимент супутніх товарів.
                        </TextStyle>
                </FooterInfoStyles>
                



                <FooterNavStyles >
                    <div className="info">
                        <TitleNavStyle>Інформація</TitleNavStyle>
                        <nav>
                            <NavItemStyle to='/home'>Головна</NavItemStyle>
                            <NavItemStyle to='/home'>Новини</NavItemStyle>
                            <NavItemStyle to='/home'>Про компанію</NavItemStyle>
                            <NavItemStyle to='/location'>Контакти</NavItemStyle>
                        </nav>
                    </div>
                    <div className="catalog">
                        <TitleNavStyle>Каталог</TitleNavStyle>
                        <nav>
                            <NavItemStyle to='/home'>Кухонні ножі</NavItemStyle>
                            <NavItemStyle to='/home'>Складні ножі</NavItemStyle>
                            <NavItemStyle to='/home'>Точилки для ножів</NavItemStyle>
                            <NavItemStyle to='/home'>Аксесуари</NavItemStyle>
                        </nav>
                    </div>
                    <div className="social">
                        <TitleNavStyle>Ми в соцмережах:</TitleNavStyle>
                            <SocialIconsStyles href="https://www.instagram.com/" target="_blunk"><InstagramIcon/></SocialIconsStyles>
                            <SocialIconsStyles href="https://www.facebook.com/" target="_blunk"><FacebookIcon/></SocialIconsStyles>
                            <SocialIconsStyles href="https://www.linkedin.com/" target="_blunk"><LinkedinIcon/></SocialIconsStyles>
                            <SocialIconsStyles href="https://www.youtube.com/" target="_blunk"><YoutubeIcon/></SocialIconsStyles>  
                    </div>
                </FooterNavStyles>



                
                <Flex flexDirection="column">
                    <TitleNavStyle>Контактна інформація</TitleNavStyle>
                    <PhoneTextStyle href="tel:+3809812345678">+380 (98) 1234-56-78</PhoneTextStyle>
                    <EmailTextStyle href="mailto:knifetown@knifetow.com">knifetown@knifetow.com</EmailTextStyle>
                    <ContactTextStyle>08:00 - 18:00, щодня</ContactTextStyle>
                    <ContactTextStyle>Україна, Київ, Район КПІ, Сікорського 57 офіс 97</ContactTextStyle>
                </Flex>
                
               </FooterStyles> 
           
            
          
        
        </Container>
        
            <BackgroundColor>
                <Container>
                    <p style={{color: '#fff', opacity: '0.5', padding: '32px 0 35px 0'}}>KNIFETOWN © 2023  Розроблено <a style={{color: '#fff'}} href="https://www.linkedin.com/in/vladyslav-zinchenko-67414a205/" target="_blunk">Vlad Zinchenko</a></p>
                </Container>
            </BackgroundColor>
       </BackgroundColor>
    )
}

export default Footer;