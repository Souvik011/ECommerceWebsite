import React,{Fragment} from "react";
import { Button } from "react-bootstrap";

const CartButton = (props) => {
    return <Fragment>
        <Button variant="outline-light" onClick={props.onShowCart}>Cart <span style={{color:"blue"}} >{0}</span></Button>
        
    </Fragment>
};

export default CartButton;