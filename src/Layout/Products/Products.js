import React, { Fragment, useContext } from "react";
import classes from "./Product.module.css";
import CartContext from "../../Store/cart-context";


const Products = (props) => {
  const CartCtx = useContext(CartContext);

  async function AddItemHandler() {
    var Formatedemail=  localStorage.getItem('email').replace("@","").replace(".","");
    const Obj = {
      id: props.id,
      quantity: 1,
      price: props.price,
      imageUrl: props.image,
      title: props.title,
    };

    const res = await axios.get(
      `https://crudcrud.com/api/b03b426820ef44799ffc8a24f1a36d21/cart${Formatedemail}`
    );
    let data = await res.data;

    let index = data.findIndex((product) => product.title === Obj.title);
    console.log("index", index);
    if (index >= 0) {
      var _id = data[index]._id;
      var quantity = data[index].quantity;
    }

    console.log("get data", data);

    if (index >= 0) {
      const res = await axios.put(
        `https://crudcrud.com/api/b03b426820ef44799ffc8a24f1a36d21/cart${Formatedemail}/${_id}`,
        { ...Obj, quantity: quantity + 1 }
      );
      const data = await res.data;
      CartCtx.addItem(Obj);
      console.log("put data", data);

      console.log("PUT", res);
    } else {
      const res = await axios.post(
        `https://crudcrud.com/api/b03b426820ef44799ffc8a24f1a36d21/cart${Formatedemail}`,
        Obj
      );
      const data = await res.data;
      CartCtx.addItem(Obj);

      console.log("Post New data", data);
    }
  };

  return (
    <Fragment>
      <div className={classes.Items}>
        <h3 style={{ textAlign: "center" }}>{props.title}</h3>

        <img className={classes.img} src={props.image} alt="some images"></img>

        <div
          style={{
            display: "inline-flex",
            justifyContent: "center",
            marginTop: "25px",
          }}
        >
          <div className={classes.price} style={{ marginRight: "5rem" }}>
            Rs. {props.price}
          </div>
          <button
            className={classes.button}
            style={{ marginRight: "7rem" }}
            onClick={() => AddItemHandler()}
          >
            Add To cart
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Products;
