import React,{Fragment,useState} from "react";
import { Nav,Button } from "react-bootstrap";
import CartButton from "../CartButton";




const NavBar = (props) => {
    const [showCart,setShowCart] = useState(false);
    const HideCartHandler = (e) => {
        e.preventDefault();
        setShowCart(false);
    }
    const ShowCartHandler = (e) => {
        e.preventDefault();
        setShowCart(true);
    }

    return (<Fragment>
        <Nav  style={{height:"3rem",width:"100%",backgroundColor:"black",display:"inline-flex",alignItems:"center",justifyContent:"space-around"}}>
            <Nav style={{height:"3rem",width:"35%",display:"flex",alignItems:"center",justifyContent:"space-between",position:"fixed"}}> 
            <Button variant="outline-light" onClick={HideCartHandler}>Home</Button>
            <Button variant="outline-light" onClick={ShowCartHandler}>Store</Button>
            <Button variant="outline-light" onClick={HideCartHandler}>About</Button>
            </Nav>
            <Nav style={{height:"100%",width:"100%",display:"flex",justifyContent:"right"}}>
            {showCart && (<CartButton />)}
            </Nav>
            
        </Nav>
    </Fragment>);
};

export default NavBar;