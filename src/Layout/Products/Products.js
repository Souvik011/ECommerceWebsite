import React,{Fragment,useContext} from "react";
import classes from './Product.module.css';
import CartContext from "../../Store/cart-context";


const Products = (props) => {
    const CartCtx = useContext(CartContext);
    
    const AddItemHandler = () => {
        CartCtx.addItem({
            
            id:props.id,
            quantity:1,
            price:props.price,
            imageUrl:props.image,
            title:props.title
        });
    };


    return <Fragment>
        <div className={classes.Items}>
        <h3 style={{textAlign:"center"}}>{props.title}</h3>
        
        <img className={classes.img} src={props.image} alt="some images"></img>
        
        
        <div style={{display:"inline-flex" , justifyContent:"center" ,  marginTop:"25px"}}>
        <div className={classes.price} style={{marginRight:"5rem"}}>Rs. {props.price}</div>
        <button className={classes.button} style={{marginRight:"7rem"}} onClick={AddItemHandler}>Add To cart</button>
        </div>
        </div>
    </Fragment>
};

export default Products;