import React,{Fragment,useContext} from "react";
import { Button } from "react-bootstrap";
import CartContext from "../Store/cart-context";

const CartButton = (props) => {
    const CartCtx = useContext(CartContext);
    const totalProduct = CartCtx.products.reduce((acc, cur) => {
        return acc + cur.quantity;
    },0);
    return <Fragment>
        <Button variant="outline-light" onClick={props.onShowCart}>Cart <span style={{color:"blue"}} >{totalProduct}</span></Button>
        
    </Fragment>
};

export default CartButton;