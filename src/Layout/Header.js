import React, { Fragment } from "react";
import NavBar from "./Navbar/NavBar";


const Header = (props) => {
    return <Fragment>
        <header style={{backgroundColor:"black",height:"3rem",color: "white",margin:"0 16px 12px 0",padding: "8px 0 20px 0",width: "100%",position:"fixed"}}>
            <NavBar onShowCart = {props.onShowCart} />
            
        </header>
        
     </Fragment>
};

export default Header;