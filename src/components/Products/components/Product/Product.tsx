
import { ReactComponent as Bag } from "../../../../svg/bag.svg";
import { CardStyle,CardIconsStyle, AddIconStyle,ProductImgStyle,ProductFooterStyle } from "./Product.styles";

interface ProductProps {
    url: string;
    price: number;
    title: string;
    id: number;
    addToCart(id:number):void;
    

}

const Product = ({url,price,title,id,addToCart}:ProductProps):JSX.Element =>{
    return(
        
        <div className="product__wrap">
            <CardStyle>
                    <CardIconsStyle className="product__card-icons" onClick={()=>{addToCart(id)}}>
                        <AddIconStyle className="product__icon-add">+</AddIconStyle>
                        <Bag className="product__icon-bag" style={{width: '14px', height: 'auto'}}/>
                    </CardIconsStyle>
                    <ProductImgStyle src={url} alt='product-img' />
            </CardStyle>
            <ProductFooterStyle>
                <h2 className="product__name">{title}</h2>
                <p className="product__price">{price} грн</p>
            </ProductFooterStyle>
        </div>
    )
}
export default Product;