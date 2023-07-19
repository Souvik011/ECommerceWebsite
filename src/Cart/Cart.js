import { useContext } from "react";
import Modal from "../Model/Modal";
import CartItem from "./CartItem";
import classes from './Cart.module.css';
import CartContext from "../Store/cart-context";

const Cart = (props) => {

  const CartCtx = useContext(CartContext);
  
  const cartElements = CartCtx.products ;
  const totalAmount = CartCtx.totalAmount;

  console.log(cartElements);

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartElements.map((item) => (
        <CartItem
          key={Math.random()}
          id={item.title}
          imge={item.imageUrl}
          title={item.title}
          quantity={item.quantity}
          price={item.price}
        />
      ))}
    </ul>
  );

  const buyHandler = (e) => {
    e.preventDefault();
    alert("Items Buyed Successfully.......Remove Your Cart Now");
  };

  return (
    <Modal onClose={props.onClose}>
      <section className={classes.section}>
        <h2 className={classes.cart}> CART </h2>
      </section>
      <div className={classes.div}>
        <span className={classes.item}> ITEM </span>
        <span className={classes.item}> PRICE </span>
        <span className={classes.item}> QUANTITY </span>
      </div>
      <div style={{marginRight:"1rem",display:"grid",justifyContent:"start"}}>
      {cartItems}
      </div>
      <h2 className={classes.h2}> Total Rs. {totalAmount} </h2>
      <button style={{backgroundColor:"blue",marginLeft:"12rem"}} onClick={buyHandler}>BUY</button><button className={classes.button} onClick={props.onClose}>Close</button>
    </Modal>
  );
};

export default Cart;
