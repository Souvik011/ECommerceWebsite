import React, { Fragment, useContext } from "react";
import { Button, Modal } from "react-bootstrap";

import CartContext from "../Store/cart-context";

const CartBox = (props) => {
  const CartCtx = useContext(CartContext);
  const totalAmount = CartCtx.totalAmount;
  const hasItems = CartCtx.products.length > 0;

  const purchaseHandler = () => {
    alert("You Have Buyed All the Products");
  };

  const cartAdd = (ele) => {
    CartCtx.addItem({ ...ele, quantity: 1 });
  };

  const cartRemove = (ele) => {
    CartCtx.removeItem(ele);
  };

  return (
    <Fragment>
      <Modal
        show={props.show}
        onHide={props.onHide}
        keyboard={props.keyboard}
        style={{ float: "right", marginLeft: "27%", marginTop: "2rem" }}
      >
        <Modal.Header>
          <Modal.Title>
            {" "}
            <h2
              style={{
                textAlign: "center",
                fontFamily: "Metal Mania",
                fontWeight: "600",
                color: "red",
                marginLeft: "3rem",
              }}
            >
              Cart
            </h2>
            <div>
              <h3
                style={{
                  display: "inline-block",
                  textAlign: "left",
                  color: "blue",
                  margin: "2.5rem",
                  borderBottom: "1.5px solid yellow",
                }}
              >
                Items
              </h3>
              <h3
                style={{
                  display: "inline-block",
                  textAlign: "center",
                  margin: "2.5rem",
                  color: "blue",
                  borderBottom: "1.5px solid yellow",
                }}
              >
                Title
              </h3>
              <h3
                style={{
                  display: "inline-block",
                  textAlign: "right",
                  margin: "2.5rem",
                  color: "blue",
                  borderBottom: "1.5px solid yellow",
                }}
              >
                Price
              </h3>
            </div>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body style={{ maxHeight: "20rem", overflow: "scroll" }}>
          {CartCtx.products.map((ele, index) => (
            <ul style={{ display: "flex" }} key={Math.random()}>
              <li style={{ listStyle: "none" }}>
                <span style={{ display: "flex" }} className="mt-lg-4">
                  <img
                    src={ele.imageUrl}
                    style={{ width: "20%" }}
                    alt="items"
                  ></img>
                  <h4 style={{ width: "20%", marginLeft: "10%" }}>
                    {ele.title}
                  </h4>
                  <span
                    style={{
                      display: "inline-block",
                      marginLeft: "5%",
                      fontFamily: "fantasy",
                    }}
                  >
                    {ele.quantity}
                  </span>
                  <div style={{ marginLeft: "20px" }}>
                    <Button
                      className="btn btn-danger p-2"
                      onClick={() => cartRemove(ele)}
                    >
                      Remove
                    </Button>
                  </div>
                  <div style={{ marginLeft: "5px" }}>
                    <Button className="btn p-2" onClick={() => cartAdd(ele)}>
                      Add
                    </Button>
                  </div>
                </span>
              </li>
            </ul>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <div style={{ textAlign: "center" }} className="m-3">
            <h3>TOTAL AMOUNT</h3>
            <h4 style={{ color: "lightcoral" }}>{totalAmount}</h4>
          </div>
          <Button variant="danger" onClick={props.onClose}>
            Close
          </Button>
          {hasItems && (
            <Button variant="success" onClick={purchaseHandler}>
              PURCHASE
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default CartBox;
