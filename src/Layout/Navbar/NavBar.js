import React, { Fragment, useState, useContext } from "react";
import { Nav, Button } from "react-bootstrap";
import CartButton from "../CartButton";
import { Link } from "react-router-dom";
import AuthContext from "../../Store/auth-context";
import { useNavigate } from "react-router-dom";

const NavBar = (props) => {
  const AuthCtx = useContext(AuthContext);
  const islogin = AuthCtx.isLoggedIn;
  const navigate = useNavigate();
  console.log(islogin);
  const [showCart, setShowCart] = useState(true);
  const HideCartHandler = (e) => {
    e.preventDefault();
    setShowCart(false);
  };
  const ShowCartHandler = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const LogOutHandler = () => {
    AuthCtx.logout();
    navigate("/auth");
  };

  return (
    <Fragment>
      <Nav
        style={{
          height: "3rem",
          width: "100%",
          backgroundColor: "black",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Nav
          style={{
            height: "3rem",
            width: "45%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "fixed",
          }}
        >
          <Button variant="outline-light" onClick={HideCartHandler}>
            <Link to="/home">Home</Link>
          </Button>
          <Button variant="outline-light" onClick={ShowCartHandler}>
            <Link to="/store">Store</Link>
          </Button>
          <Button variant="outline-light" onClick={HideCartHandler}>
            <Link to="/about">About</Link>
          </Button>
          {islogin && (
            <Button variant="outline-light" onClick={LogOutHandler}>
              Log Out
            </Button>
          )}
        </Nav>
        <Nav
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "right",
          }}
        >
          {showCart && <CartButton onShowCart={props.onShowCart} />}
        </Nav>
      </Nav>
    </Fragment>
  );
};

export default NavBar;
