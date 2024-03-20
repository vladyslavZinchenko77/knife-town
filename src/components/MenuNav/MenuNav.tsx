import styled from "styled-components";
import { ReactComponent as ArrowBck } from "../../svg/arrow-back.svg"
import { CSSProperties } from 'react';

const MenuNavStyles = styled.nav`
width: 320px;
z-index: 10;
position: fixed;
top:0 ;
left:0;
bottom: 0;
display: flex;
flex-direction: column;
background-color: rgb(0,0,0,0.7);

`
const MenuNavItemStyles = styled.a`
font-family: 'Montserrat';
font-weight: 500;
font-size: 18px;
line-height: 1.2s;
text-transform: uppercase;
color: #FFFFFF;
text-decoration: none;
padding: 20px 0 20px 15px;
transition: 0.4s;




&:hover{
    color: grey;
    transition: 0.4s;
}
`
const ArrowBackStyles = styled(ArrowBck)`
padding: 20px 0 0 15px;
& path{
    transition: 0.4s;
}
&:hover path{
    transition: 0.4s;
    stroke: grey;
}
`

const BackDrop = styled.div`
// background-color: rgb(0,0,0,0.5);
// position: fixed;
// top: 0;
// left: 0;
// right: 0;
// bottom: 0;
// z-index: 9;
// overflow: hidden;

`
interface MenuNavProps {
    style: CSSProperties;
    closeMenu():void;
    selectFoldingKnifes():void;
    selectKnifes():void;
    selectSharpeners():void;
    selectAccessories():void;
  }

const MenuNav: React.FC<MenuNavProps> = ({style,closeMenu,selectFoldingKnifes,selectKnifes,selectSharpeners,selectAccessories})=>{
    return(
    <BackDrop >
        <MenuNavStyles style={style}>
            <MenuNavItemStyles onClick={closeMenu} href="#"><ArrowBackStyles/></MenuNavItemStyles>
            <MenuNavItemStyles onClick={selectKnifes} href="#">Кухонні ножі</MenuNavItemStyles>
            <MenuNavItemStyles onClick={selectFoldingKnifes} href="#" >Складні ножі</MenuNavItemStyles>
            <MenuNavItemStyles onClick={selectSharpeners} href="#">Точилки для ножів</MenuNavItemStyles>
            <MenuNavItemStyles onClick={selectAccessories} href="#">Аксесуари для кухні</MenuNavItemStyles>
            <MenuNavItemStyles href="#">Корзина</MenuNavItemStyles>
            <MenuNavItemStyles href="#">Контакти</MenuNavItemStyles>
            <MenuNavItemStyles href="#">Як проїхати</MenuNavItemStyles>
        </MenuNavStyles>
    </BackDrop>
    )
}

export default MenuNav;