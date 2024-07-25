import React, { useEffect } from "react";
import { CartProvider, useCart } from "./context/CartContext";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./index.css"; 
import productsData from "./data/products.json";

const App = () => {
  const { dispatch } = useCart();

  useEffect(() => {
    dispatch({ type: "INITIALIZE_CART", payload: productsData.products });
  }, [dispatch]);

  return (
    <div className="container">
      <h1>Shopping Cart</h1>
      <ProductList />
      <Cart />
    </div>
  );
};

const Root = () => (
  <CartProvider>
    <App />
  </CartProvider>
);

export default Root;
