import React from "react";
import classes from './CartItem.module.css';

const CartItem = (props) => {
  

  return (
    <li >
      <div className={classes['cart-item']}>
        <h2>{props.title}</h2>
        <div className={classes.summary}>
         <span> 
          <img src={props.imge} style={{height:'70px',width:'55px'}}/>
          <p>{props.title}</p>
         </span>
          <span className={classes.price}>{props.price}</span>
          <span className={classes.quantity} >{props.quantity}</span>
        </div>
        <div className={classes.actions}>
        <button onClick={props.onRemove}>-</button>
        <button onClick={props.onAdd}>+</button>
      </div>
      <button>Remove</button>
      </div>
      
    </li>
  );
};

export default CartItem;