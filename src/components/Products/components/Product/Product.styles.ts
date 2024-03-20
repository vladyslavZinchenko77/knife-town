import styled from "styled-components";

export const CardStyle = styled.div`
    background-color: #272727;
    border-radius: 14px;
    width: 286px;
    height: 412px;
    cursor: pointer;
    position: relative;
    &:hover{
        .product__icon-add{
            transition: 0.4s;
            background-color: #C80000;
        }
    }
`
export const CardIconsStyle = styled.div`
    display: flex;
    justify-content: space-between;
    border-radius: 18px;
    transition: 0.4s;
    &:hover{
        .product__icon-bag{
            opacity:1;
            transition: 0.4s;
            
        } 

    &:hover{
        .product__icon-add{
            transition: 0.4s;
            padding-right: 40px;
        }
    }
    }
    .product__icon-bag{
        position: absolute;
        top: 21px;
        right: 16px;
        transition: 0.4s; 
        opacity:0;
        padding: 8px 13px 10px 13px;
        background-color: rgb(0,0,0,0);
        border-radius: 50px;
    
    }
    .product__icon-add{
        transition: 0.4s;
        position: absolute;
        top: 18px;
        right: 16px;
        padding: 8px 13px 10px 13px;
        background-color: rgb(0,0,0,0);
        border-radius: 50px;
    }
`
export const AddIconStyle = styled.p`
    font-size: 24px;
    color: #fff;
    cursor: pointer;
`

export const ProductImgStyle = styled.img`
    position: absolute;
    top: 90px;
    left: 26px;
    width: 235px;
    height: auto;
`

export const ProductFooterStyle = styled.div`
    margin-top: 11px;
    .product__name{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 2;
        color: #FFFFFF;  
    }
    .product__price{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 2;
        color: #FFFFFF;
        opacity: 0.5;
    }
`