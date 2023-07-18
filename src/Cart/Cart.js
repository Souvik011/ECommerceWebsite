import Modal from "../Model/Modal";
import CartItem from "./CartItem";
import classes from './Cart.module.css';

const Cart = (props) => {
  const cartElements = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

      quantity: 2,
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

      quantity: 3,
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

      quantity: 1,
    },
  ];

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
      <h2 className={classes.h2}> Total Rs.{0} </h2>
      <button style={{backgroundColor:"blue",marginLeft:"12rem"}}>BUY</button><button className={classes.button} onClick={props.onClose}>Close</button>
    </Modal>
  );
};

export default Cart;
