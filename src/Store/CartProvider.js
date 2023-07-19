import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultState = {
  products: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    console.log("inside cartReducer", action.value);

    let updatedAmount =
      Number(state.totalAmount) +
      Number(action.value.price) * Number(action.value.quantity);

    const existigCartIndex = state.products.findIndex(
      (product) => product.title === action.value.title
    );

    const existingItem = state.products[existigCartIndex];

    let updatedItems;

    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        quantity: Number(existingItem.quantity) + Number(action.value.quantity),
      };
      updatedItems = [...state.products];
      updatedItems[existigCartIndex] = updatedItem;
    } else {
      updatedItems = state.products.concat(action.value);
    }

    return {
      products: updatedItems,
      totalAmount: updatedAmount,
    };
  }

  if (action.type === "REMOVE") {
    const existingCartIndex = state.products.findIndex(
      (product) => product === action.value
    );
    const existingItem = state.products[existingCartIndex];

    const updatedTotalamount =
      Number(state.totalAmount) - Number(action.value.price);
    console.log("title cheking in remove", action.value.title);

    let updatedItems;

    if (existingItem.quantity < 2) {
      updatedItems = state.products.filter(
        (product) => product !== action.value
      );
    } else {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity - 1,
      };
      updatedItems = [...state.products];
      updatedItems[existingCartIndex] = updatedItem;
      console.log("INSIDE ELSE STATEMENT");
    }
    return {
      products: updatedItems,
      totalAmount: updatedTotalamount,
    };
  }
};

const CartProvider = (props) => {
  const [state, dispatch] = useReducer(cartReducer, defaultState);

  const addProductHandler = (product) => {
    dispatch({
      type: "ADD",
      value: product,
    });
  };

  const removeProductHandler = (id) => {
    dispatch({
      type: "REMOVE",
      value: id,
    });
  };

  const Cart = {
    products: state.products,
    totalAmount: state.totalAmount,
    addItem: addProductHandler,
    removeItem: removeProductHandler,
  };
  return (
    <CartContext.Provider value={Cart}>{props.children}</CartContext.Provider>
  );
};

export default CartProvider;
