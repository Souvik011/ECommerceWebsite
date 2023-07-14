import React,{Fragment} from "react";
import { Card } from "react-bootstrap";
import classes from './Product.module.css';


const Products = (props) => {
    return <Fragment>
        <div className={classes.Items}>
        <h3>{props.title}</h3>
        <Card style={{height:"12rem",width:"10rem"}}>
        <img className={classes.img} src={props.image} alt="some images"></img>
         <div className={classes.price}>Rs. {props.price}</div>
        <button className={classes.button} >Add To cart</button>

        </Card>
        </div>
    </Fragment>
};

export default Products;