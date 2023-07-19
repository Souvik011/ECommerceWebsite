import React,{useContext} from "react";
import classes from './CartItem.module.css';
import CartContext from "../Store/cart-context";

const CartItem = (props) => {
  
  const CartCtx = useContext(CartContext);

  const AddItemHandler = (e) => {
    e.preventDefault();
    CartCtx.addItem({
          
            id:props.id,
            quantity:1,
            price:props.price,
            imageUrl:props.imge,
            title:props.title
    });
  };

  const DeleteItemHandler = (e) => {
    e.preventDefault();
    CartCtx.removeItem({
      
      id:props.id,
      quantity:1,
      price:props.price,
      imageUrl:props.imge,
      title:props.title
});
  };

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
        <button onClick={AddItemHandler}>+</button>
        <button onClick={DeleteItemHandler}>-</button>
      </div>
      <button>Remove</button>
      </div>
      
    </li>
  );
};

export default CartItem;