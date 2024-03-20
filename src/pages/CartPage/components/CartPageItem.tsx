import styled from "styled-components"
import { ReactComponent as CloseIcon } from "../../../svg/close.svg";





export const CartItemStyle = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
background-color: #303030;
padding: 32px;
border-bottom: 1px solid #4F4F4F;

.cart__item-img{
    width: 56px;
    height: auto;
}
.cart__item-title{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #FFFFFF;
}
.cart__item-price{
    display: flex;
    align-items: center;
    .cart__item-price--cost{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 1.4;
        color: #FFFFFF;
        position: relative;
        padding: 0 5px 0 5px;
        &:after{
            content: '';
            width: 120% ;
            background-color: grey;
            height: 2px;
            position: absolute;
            top: 20px;
            left: 0;
            right: 0;
            
        }
    }
    .cart__item-price--price{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 1.25;
        color: #FFFFFF;
        margin-left: 15px;
    }
    .cart__item-price--icon{
        margin-left: 15px;
        cursor: pointer;
        & path{
            transition: 0.4s;
        }
        &:hover{
            & path{
                transition: 0.4s;
                fill: #fff;
            }
        }
    }
}
`
interface CartPageItemProps{
    url: string;
    title: string;
    price: number;
    id:number;
    deleteFromCart(id:number):void;
}

export const CartPageItem:React.FC<CartPageItemProps> = ({title,url,price,id,deleteFromCart}) =>{
    return(

        <div>
        <CartItemStyle className="cart__item">
                    <img className="cart__item-img" src={url} alt="" />
                    <div className="cart__item-title">{title}</div>
                    <div className="cart__item-price">
                        <p className="cart__item-price--cost">1</p>
                        <p className="cart__item-price--price">{price} грн</p>
                        <CloseIcon className="cart__item-price--icon" onClick={() => deleteFromCart(id)}/>
                    </div>
                </CartItemStyle>
        
        </div>
    )
}