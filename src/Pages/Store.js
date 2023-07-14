import React, { Fragment } from "react";
import AvailableProduct from "../Layout/Products/AvailableProduct";

const Store = (props) => {
    return <Fragment>
        <div style={{height:"auto",alignItems:"center",justifyContent:"center"}}>
        <h3 style={{fontFamily:"cursive",textAlign:"center",fontSize:"25px",padding:"20px",color:"aliceblue"}}>Music Albums</h3>
        <AvailableProduct />
        </div>
    </Fragment>
};

export default Store;