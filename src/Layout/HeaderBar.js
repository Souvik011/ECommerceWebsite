import React from "react";
import { Nav } from "react-bootstrap";

const HeaderBar = () => {
    return (<Nav>
        <Nav.Item style={{color:"white",backgroundColor:"rgb(161, 157, 157)",display:"inline-flex",alignItems:"start",justifyContent:"center",height:"12rem",width:"100%",fontSize:"70px",fontWeight:"700",fontVariant:"traditional"}}>The Generics</Nav.Item>
    </Nav>);
};

export default HeaderBar;