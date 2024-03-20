import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Filter from "../../components/Filter/Filter";
import Products from "../../components/Products/Products";
import About from "../../components/About/About";
import Blog from "../../components/Blog/Blog";
import Footer from "../../components/Footer/Footer";


interface HomePageProps{
products: any[];
addToCart(id:number):void;
selectFoldingKnifes():void;
selectKnifes():void;
selectSharpeners():void;
selectAccessories():void;
selectedProducts: any[];
}

const HomePage: React.FC<HomePageProps> = ({products,addToCart,selectFoldingKnifes,selectAccessories,selectSharpeners,selectKnifes,selectedProducts }):JSX.Element=>{
    return(
        <>
            <Header 
                selectFoldingKnifes={selectFoldingKnifes}
                selectAccessories={selectAccessories}
                selectSharpeners={selectSharpeners}
                selectKnifes={selectKnifes}
                />
                <body>
                    <Hero/>
                    <Filter  selectFoldingKnifes={selectFoldingKnifes} selectKnifes={selectKnifes} selectSharpeners={selectSharpeners} selectAccessories={selectAccessories} />
                    <Products products={products} addToCart={addToCart} selectedProducts={selectedProducts} />
                    <About/>
                    <Blog/>
                </body>
            <Footer/>
        </>
    )
}

export default HomePage;