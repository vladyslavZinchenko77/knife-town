import React, { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import LocationPage from './pages/LocationPage/LocationPage';
import CartPage from './pages/CartPage/CartPage';
import { Product } from './interfaces/Interfaces';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: Montserrat, sans-serif;
    background-color: #f5f5f5;
  }
`;

const sendRequest = async (url: string) => {
  const response = await fetch(url);
  const result = await response.json();
  return result;
};

function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState<Product[]>(
    () => {
      const cartData = localStorage.getItem('cart');
      return cartData ? JSON.parse(cartData) : [];
    }
  );
  const [products, setProducts] = useState<Product[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

  const addToCart = (id: number): void => {
    const selectedProduct = products.filter((product) => product.id === id);
    if (selectedProduct.length > 0) {
      setCart([...cart, ...selectedProduct]);
    }
  };

  const deleteFromCart = (id: number) => {
    const updatedCart = cart.filter((product) => product.id !== id);
    setCart(updatedCart);
  };

  const calculateTotalPrice = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price;
    });
    setTotalPrice(total);
  };

  useEffect(() => {
    setIsLoading(true);
    sendRequest('/products.json').then((data) => {
      setProducts(data);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    calculateTotalPrice();
  }, [cart]);

  useEffect(() => {
    const selectedKnifes = products.filter((item) => item.type === 'knife');
    setSelectedProducts(selectedKnifes);
  }, [products]);

  const selectKnifes = () => {
    const selectedKnifes = products.filter((item) => item.type === 'knife');
    setSelectedProducts(selectedKnifes);
  };

  const selectFoldingKnifes = () => {
    const selectedFoldingKnifes = products.filter(
      (item) => item.type === 'folding knives'
    );
    setSelectedProducts(selectedFoldingKnifes);
  };

  const selectSharpeners = () => {
    const selectedKnifeSharpeners = products.filter(
      (item) => item.type === 'knife sharpener'
    );
    setSelectedProducts(selectedKnifeSharpeners);
  };

  const selectAccessories = () => {
    const selectedKitchenAccessories = products.filter(
      (item) => item.type === 'Kitchen accessories'
    );
    setSelectedProducts(selectedKitchenAccessories);
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route
            path="/"
            element={
              !isLoading && (
                <HomePage
                  addToCart={addToCart}
                  products={products}
                  selectFoldingKnifes={selectFoldingKnifes}
                  selectKnifes={selectKnifes}
                  selectSharpeners={selectSharpeners}
                  selectAccessories={selectAccessories}
                  selectedProducts={selectedProducts}
                />
              )
            }
          />
          <Route
            path="/home"
            element={
              !isLoading && (
                <HomePage
                  addToCart={addToCart}
                  products={products}
                  selectFoldingKnifes={selectFoldingKnifes}
                  selectKnifes={selectKnifes}
                  selectSharpeners={selectSharpeners}
                  selectAccessories={selectAccessories}
                  selectedProducts={selectedProducts}
                />
              )
            }
          />
          <Route 
            path="/location" 
             element={
            <LocationPage 
                  selectFoldingKnifes={selectFoldingKnifes}
                  selectKnifes={selectKnifes}
                  selectSharpeners={selectSharpeners}
                  selectAccessories={selectAccessories} 
              />} />
          <Route
            path="/cart"
            element={
              !isLoading && (
                <CartPage
                  deleteFromCart={deleteFromCart}
                  cart={cart}
                  totalPrice={totalPrice}
                  selectFoldingKnifes={selectFoldingKnifes}
                  selectKnifes={selectKnifes}
                  selectSharpeners={selectSharpeners}
                  selectAccessories={selectAccessories} 
                  
                />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
