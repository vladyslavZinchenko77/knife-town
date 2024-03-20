import styled from "styled-components"
import { Link } from "react-router-dom"

export const TextStyle = styled.p`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 1.54;
color: #FFFFFF;
padding-top: 29px;
`
export const TitleStyle = styled.h2`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 13px;
line-height: 1.31;
color: #FFFFFF;
`
export const TitleNavStyle = styled.h2`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 17px;
line-height: 1.65;
color: #FFFFFF;
`
export const NavItemStyle =  styled(Link)`
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 1.71;
color: #FFFFFF;
opacity: 0.5;
transition: 0.4s;
text-decoration: none;
padding-right: 40px;
&:last-child{
    padding-right:0;
}
&:hover{
transition: 0.4s;
opacity: 1;
}
`

export const FooterStyles = styled.footer`
display: flex;
justify-content: space-between;
padding: 44px 0 35px 0;
gap: 62px;
@media screen and (max-width: 1200px){
    flex-wrap: wrap;
}
`
export const FooterInfoStyles = styled.div`
width: 368px;

`
export const FooterNavStyles = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
.social{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
`
export const SocialIconsStyles = styled.a`
display: flex;
background-color:  #2E2E2E;
padding: 9px;
border-radius: 14px;
transition: 0.4s;
&:hover{
    background-color:  #5E5E5E;
    transition: 0.4s;
}

`

export const ContactTextStyle = styled.p`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 1.36;
color: #FFFFFF;
padding-top: 30px;
`

export const EmailTextStyle = styled.a`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 1.36;
color: #FFFFFF;
text-decoration: none;
padding-top: 10px;
`
export const PhoneTextStyle = styled.a`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 1.4;
color: #FFFFFF;
text-decoration: none;
padding-top: 23px;
`