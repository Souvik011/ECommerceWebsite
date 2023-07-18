import React,{Fragment} from "react";
// import { Card } from "react-bootstrap";
import classes from './Product.module.css';


const Products = (props) => {
    return <Fragment>
        <div className={classes.Items}>
        <h3 style={{textAlign:"center"}}>{props.title}</h3>
        
        <img className={classes.img} src={props.image} alt="some images"></img>
        
        
        <div style={{display:"inline-flex" , justifyContent:"center" ,  marginTop:"25px"}}>
        <div className={classes.price} style={{marginRight:"5rem"}}>Rs. {props.price}</div>
        <button className={classes.button} style={{marginRight:"7rem"}}>Add To cart</button>
        </div>
        </div>
    </Fragment>
};

export default Products;