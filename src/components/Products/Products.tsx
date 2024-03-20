import { useState, useEffect } from "react";
import Container from "../Container/Container";
import Product from "./components/Product/Product";
import productPosterImg from '../../img/product-cook-knife-title.png'
import { ReactComponent as InstagramIcon } from "../../svg/instagram.svg";
import instagramProductImg from '../../img/product-cook-knife-instagram.png'
import EmailNewsInput from "../EmailNewsInput/EmailNewsInput";
import Flex from "../Flex/Flex";
import { ProductBackStyle, ProductPosterStyle, ProductInstagramStyle, ProductsFirstStyle, ProductTitleBtnStyle, EmailInputMobileWrap, EmailInputFullScreeneWrap } from "./Products.style";

interface ProductsProps {
    products: any[];
    addToCart(id:number):void;
    selectedProducts: any[];
}


const Products: React.FC<ProductsProps> = ({products,addToCart,selectedProducts}):JSX.Element =>{

    return(
        <ProductBackStyle>
            <Container>
                <ProductsFirstStyle>
                    <ProductPosterStyle url={productPosterImg}>
                            <h2 className="products__first-poster-title">Познайомтеся з колекцією ножів KNIFETOWN</h2>
                    </ProductPosterStyle>
                    <Product    addToCart={addToCart} id={selectedProducts[0]?.id} url={selectedProducts[0]?.url} title={selectedProducts[0]?.title} price={selectedProducts[0]?.price}/>
                    <Product    addToCart={addToCart} id={selectedProducts[1]?.id} url={selectedProducts[1]?.url} title={selectedProducts[1]?.title} price={selectedProducts[1]?.price}/>
                    <Product    addToCart={addToCart} id={selectedProducts[2]?.id} url={selectedProducts[2]?.url} title={selectedProducts[2]?.title} price={selectedProducts[2]?.price}/>
                    <Product    addToCart={addToCart} id={selectedProducts[3]?.id} url={selectedProducts[3]?.url} title={selectedProducts[3]?.title} price={selectedProducts[3]?.price}/>
                    <a href="https://www.instagram.com/" target="_blank">
                    <ProductInstagramStyle url={instagramProductImg}>
                        
                            <div className="products__first-instagrm--wrapper">
                                <InstagramIcon/>
                                <h2 className="products__first-instagrm--title">Instagram</h2>
                            </div>
                    </ProductInstagramStyle>
                    </a>
                    <Product addToCart={addToCart}   id={selectedProducts[4]?.id} url={selectedProducts[4]?.url} title={selectedProducts[4]?.title} price={selectedProducts[4]?.price}/>
                </ProductsFirstStyle>
                <EmailInputFullScreeneWrap>
                    <EmailNewsInput/>
                </EmailInputFullScreeneWrap>    
                <ProductsFirstStyle>
                    <Product    addToCart={addToCart} id={selectedProducts[5]?.id} url={selectedProducts[5]?.url} title={selectedProducts[5]?.title} price={selectedProducts[5]?.price}/>
                    <Product    addToCart={addToCart} id={selectedProducts[6]?.id} url={selectedProducts[6]?.url} title={selectedProducts[6]?.title} price={selectedProducts[6]?.price}/>
                    <Product    addToCart={addToCart} id={selectedProducts[7]?.id} url={selectedProducts[7]?.url} title={selectedProducts[7]?.title} price={selectedProducts[7]?.price}/>
                    <Product    addToCart={addToCart} id={selectedProducts[8]?.id} url={selectedProducts[8]?.url} title={selectedProducts[8]?.title} price={selectedProducts[8]?.price}/>
                </ProductsFirstStyle>
                <div className="products__popular-new">
                    <Flex justifyContent="center" margin="122px 0 30px 0">
                        <ProductTitleBtnStyle>НОВИНКИ</ProductTitleBtnStyle>
                        <ProductTitleBtnStyle style={{marginLeft: '53px'}}>ПОПУЛЯРНЕ</ProductTitleBtnStyle>
                    </Flex>
                    <ProductsFirstStyle>
                        <Product   addToCart={addToCart} id={selectedProducts[9]?.id} url={selectedProducts[9]?.url} title={selectedProducts[9]?.title} price={selectedProducts[9]?.price}/>
                        <Product    addToCart={addToCart} id={selectedProducts[10]?.id} url={selectedProducts[10]?.url} title={selectedProducts[10]?.title} price={selectedProducts[10]?.price}/>
                        <Product    addToCart={addToCart} id={selectedProducts[11]?.id} url={selectedProducts[11]?.url} title={selectedProducts[11]?.title} price={selectedProducts[11]?.price}/>
                        <Product    addToCart={addToCart} id={selectedProducts[12]?.id} url={selectedProducts[12]?.url} title={selectedProducts[12]?.title} price={selectedProducts[12]?.price}/>
                    </ProductsFirstStyle>
                </div>
                <EmailInputMobileWrap>
                    <EmailNewsInput/>
                </EmailInputMobileWrap>
            </Container>
        </ProductBackStyle>
    )
}

export default Products;