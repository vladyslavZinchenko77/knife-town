import styled from "styled-components"


export const HeaderBack = styled.div`
background-color: rgba(33, 33, 33, 0.8);
position: fixed;
top: 0;
left:0;
right:0;
z-index:2;
`

export const PhoneNumber = styled.a`
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 24px;
text-transform: uppercase;
text-decoration:none;
color: #fff;
transition: 0.4s;
&:hover{
    transition: 0.4s;
    color: grey;
}
`

export const HeaderStyles = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 120px 0 120px;
  @media screen and (min-width: 768px) and (max-width: 1200px){
    padding: 0 20px 0 20px;
    
  }
  @media screen and (min-width: 320px) and (max-width: 767px){
    padding: 0 15px 0 15px;
    .header__right{
      display: none;
    }
  }
  .header__phone,
      .header__bag-left{
        display: none;
        padding-left: 29px;
        cursor: pointer;
    }
    
  .header__bag-right{
    cursor: pointer;
    transition: 0.4s;
    &:hover path{
      fill: grey;
      transition: 0.4s;
    }
    & path{
      transition: 0.4s;
    }
    
  }
  .header__search,
  .header__mail{
    cursor: pointer;
    transition: 0.4s;
    &:hover path{
      stroke: grey;
      transition: 0.4s;
    }
    & path{
      transition: 0.4s;
    }
  }
  .header__menu-group{
    .header__map,
    .header__phone{
      cursor:pointer;
      &:hover path{
        stroke: grey;
        transition: 0.4s;
      }
      & path{
        transition: 0.4s;
      }
    }
    .header__menu{
      cursor: pointer;
      transition: 0.4s;
      &:hover circle{
        stroke: grey;
        transition: 0.4s;
      }
      & circle{
        transition: 0.4s;
      }
    }
    .header__bag-left{
      cursor:pointer;
      transition: 0.4s;
      &:hover path{
        fill: grey;
        transition: 0.4s;
      }
      & path{
        
        transition: 0.4s;
      }
      
    }
  }
 

  @media screen and (min-width: 320px) and (max-width: 768px){
    .header__bag-right,
    .header__mail,
    .header__search,
    .header__phone-number{
      display: none;
    }
    .header__phone,
    .header__bag-left{
        display: block;
       
    }

  }
 
`;