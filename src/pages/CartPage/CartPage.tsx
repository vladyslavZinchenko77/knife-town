
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import EmailNewsInput from "../../components/EmailNewsInput/EmailNewsInput";
import { ReactComponent as ArrowCart } from "../../svg/arrow-cart.svg";
import BackgroundColor from "../../components/BackgroundColor/BackgroundColor";
import Container from "../../components/Container/Container";
import { TittleWrapStyle,TitleStyle,LinkToHomeWrapStyle,TextLinkToHomeStyle,TotalPriceStyle,CartIsFullText} from "./CartPage.style";
import Pay from "./components/Pay";
import CartPageForm from "./components/CartPageForm";
import { CartPageItem } from "./components/CartPageItem";


interface CartPageProps{
    cart: any[];
    deleteFromCart(id:number):void;
    totalPrice: number;
    selectFoldingKnifes():void;
    selectKnifes():void;
    selectSharpeners():void;
    selectAccessories():void;
}



const CartPage: React.FC<CartPageProps> = ({cart, deleteFromCart, totalPrice,selectFoldingKnifes,selectKnifes,selectSharpeners,selectAccessories}):JSX.Element=>{

     

        const cartItems = cart.map((item) => (
            <CartPageItem deleteFromCart={deleteFromCart} id={item.id} url={item.url} title={item.title} price={item.price} key={item.id} />
          ));

    return(

            <BackgroundColor>                
            <Header
                selectFoldingKnifes={selectFoldingKnifes}
                selectKnifes={selectKnifes}
                selectSharpeners={selectSharpeners}
                selectAccessories={selectAccessories}/>
            <Container>
                <TittleWrapStyle>
                    <Link className="go-home__link" to='/home' style={{display: 'flex',textDecoration: 'none', }}>
                        <ArrowCart className="go-home__link-arrow"/>
                        <TextLinkToHomeStyle className="go-home__link-text">До покупок</TextLinkToHomeStyle>
                    </Link>
                    <TitleStyle>Корзина</TitleStyle>
                </TittleWrapStyle>
                <div style={{marginTop: '30px'}}>
                {cart.length > 0 ? cartItems : <CartIsFullText>Ваша корзина пуста</CartIsFullText>}          
                    <TotalPriceStyle>
                        <p className="total__title">До оплати:</p>
                        <p className="total__price">{totalPrice} грн</p>
                    </TotalPriceStyle>
                </div>
                <Pay/>
                <CartPageForm/>
                </Container>
            <EmailNewsInput/>
            <Footer/>
            
        </BackgroundColor>
       
    )
}

export default CartPage;