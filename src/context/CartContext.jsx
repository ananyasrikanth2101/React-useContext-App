import React, { createContext, useReducer, useContext } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return state.map((product) =>
        product.id === action.payload.id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
    case "REMOVE_FROM_CART":
      return state.map((product) =>
        product.id === action.payload.id && product.quantity > 0
          ? { ...product, quantity: product.quantity - 1 }
          : product
      );
    case "REMOVE_ITEM_FROM_CART":
      return state.map((product) =>
        product.id === action.payload.id ? { ...product, quantity: 0 } : product
      );
    case "INITIALIZE_CART":
      return action.payload.map((product) => ({ ...product, quantity: 0 }));
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
