import React, { Fragment } from "react";
import AvailableProduct from "../Layout/Products/AvailableProduct";
import HeaderBar from "../Layout/HeaderBar";

const Store = (props) => {
    return <Fragment>
        <div style={{paddingTop:"4rem"}}>
        <HeaderBar />
        <div style={{height:"auto"}} >
        <h3 style={{fontFamily:"cursive",textAlign:"center",fontSize:"25px",padding:"20px",color:"blue"}}>Music Albums</h3>
        <AvailableProduct />
        </div>
        </div>
    </Fragment>
};

export default Store;