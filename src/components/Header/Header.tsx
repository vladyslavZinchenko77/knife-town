import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Flex from "../Flex/Flex";
import Logo from "../Logo/Logo";
import MenuNav from "../MenuNav/MenuNav";
import { ReactComponent as Menu } from "../../svg/menu.svg";
import { ReactComponent as Map } from "../../svg/map.svg";
import { ReactComponent as Bag } from "../../svg/bag.svg";
import { ReactComponent as Mail } from "../../svg/mail.svg";
import { ReactComponent as Search } from "../../svg/search.svg";
import { ReactComponent as Phone } from "../../svg/phone.svg";
import { HeaderBack, PhoneNumber, HeaderStyles } from "./Header.styles";


interface HeaderProps{
  selectFoldingKnifes():void;
  selectKnifes():void;
  selectSharpeners():void;
  selectAccessories():void;
}

const Header: React.FC<HeaderProps> = ({selectFoldingKnifes,selectKnifes,selectSharpeners,selectAccessories}): JSX.Element => {
 
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [visibleMenu, setVisibleMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = prevScrollPos > currentScrollPos;

      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);


const closeMenu = ()=>{
  setVisible(true);
  setVisibleMenu(false);
}

  return (
    <>
      <HeaderBack style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(-100%)', transition: 'opacity 0.4s, transform 0.4s' }}>
        <HeaderStyles>
          <Flex className="header__menu-group" alignItems="center">
            <Menu className="header__menu" onClick={()=>{setVisible(false);setVisibleMenu(true)}} />
            <Link to="/location">
              <Map className="header__map" style={{ marginLeft: '26px' }} />
            </Link>
            <PhoneNumber className="header__phone-number" style={{ marginLeft: '37px' }} href="tel:+3809812345678">+380 (98) 1234-56-78</PhoneNumber>
            <a href="tel:+3809812345678"><Phone className="header__phone" /></a>
            <Link to="/cart"><Bag className="header__bag-left" /></Link>
          </Flex>
          <Link to="/home" style={{ padding: '18px 0 18px 0', textDecoration: 'none' }}><Logo /></Link>
          <Flex className="header__right" alignItems="center" justifyContent="center">
            <Link to="/cart"><Bag className="header__bag-right" /></Link>
            <a href="mailto:mail@gmail.com"><Mail className="header__mail" style={{ marginLeft: '26px' }} /></a>
            <Search className="header__search" style={{ marginLeft: '26px' }} />
          </Flex>
        </HeaderStyles>
      </HeaderBack>
      <MenuNav
       closeMenu={closeMenu} 
       style={{ opacity: visibleMenu ? 1 : 0, transform: visibleMenu ? 'translateX(0)' : 'translate(-100%)', transition: 'opacity 0.4s, transform 0.4s' }}
       selectFoldingKnifes={selectFoldingKnifes}
       selectKnifes={selectKnifes}
       selectSharpeners={selectSharpeners}
       selectAccessories={selectAccessories}
       />
    </>
  );
};

export default Header;
