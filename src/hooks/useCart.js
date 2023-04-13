import React from "react";
import AppContext from "../context";

export const useCart = () => {
  const { cartItems, setCartItems } = React.useContext(AppContext);
  const totalCash = cartItems.reduce((acc, curr) => acc + curr.price, 0);

  return { cartItems, setCartItems, totalCash };
};