import React,{Fragment,useContext,useEffect} from "react";
import { Button } from "react-bootstrap";
import CartContext from "../Store/cart-context";
import axios from "axios";

const CartButton = (props) => {
    const CartCtx = useContext(CartContext);
    useEffect(()=>{
        async function refresh() {
          var Formatedemail=  localStorage.getItem('email').replace("@","").replace(".","");
          const res = await axios.get(
            `https://crudcrud.com/api/b03b426820ef44799ffc8a24f1a36d21/cart${Formatedemail}`
          );
          const data = await res.data;
    
          for (let i = 0; i < data.length; i++) {
           CartCtx.addItem({
              title: data[i].title,
              price: data[i].price,
              imageUrl: data[i].imageUrl,
              quantity: data[i].quantity,
              id: data[i].id,
            });
          }
        }
        refresh();
      },[]);
    const totalProduct = CartCtx.products.reduce((acc, cur) => {
        return acc + cur.quantity;
    },0);
    return <Fragment>
        <Button variant="outline-light" onClick={props.onShowCart}>Cart <span style={{color:"blue"}} >{totalProduct}</span></Button>
        
    </Fragment>
};

export default CartButton;