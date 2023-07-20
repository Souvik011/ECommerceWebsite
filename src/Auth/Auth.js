import React, { useRef,useState,Fragment,useContext } from "react";
import { Form,Card, Button } from "react-bootstrap";
import AuthContext from "../Store/auth-context";


const Auth = (props) => {
    const AuthCtx = useContext(AuthContext);
    const [signup,setSignUp] = useState(true);
    const [isLoading,setIsLoading] = useState(true);
    const EmailRef = useRef();
    const PassRef = useRef();
    const ConfirmPassRef = useRef(); 
    let Obj;
    let link;
    const ChangeHandler =  ()  => { setSignUp((prevState) => !prevState);};

    const submitHandler = (e) => {
        e.preventDefault();
        const enteredEmail = EmailRef.current.value;
        localStorage.setItem('email',enteredEmail);
        if(isLoading){
          <h1>"is Loading..."</h1>;
        } 
        if(signup){
            Obj = {
                email:EmailRef.current.value,
                password:PassRef.current.value,
                returnSecureToken: true,
            };
            link = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBvPELIwxHs3wToSpMlTVeSt03pHvohb7c";
        } else {
            Obj = {
                email:EmailRef.current.value,
                password:PassRef.current.value,
                returnSecureToken: true,
            };
            link = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBvPELIwxHs3wToSpMlTVeSt03pHvohb7c";
    
        }

        fetch(link, {
            method: "POST",
            body: JSON.stringify(Obj),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((res) => {
              setIsLoading(false);
              if (res.ok) {
                return res.json();
              } else {
                return res.json().then((data) => {
                  let errorMessage = "Authentication failed!";
                  throw new Error(errorMessage);
                });
              }
            })
            .then((data) => {
               AuthCtx.login(data.idToken);
               alert("Completed AUth");
            })
            .catch((err) => {
              alert(err.message);
            });
    
        console.log(Obj);
    };

    return (<Fragment>
        <Card style={{backgroundColor:"orchid"}}>
        <Card.Header><marquee><h4 style={{color:"yellowgreen"}}>Welcome to Souvik's E_Commerce Website</h4></marquee> </Card.Header>
        <Card.Body>
        <Form style={{margin:"3rem 25% 2rem 25%" ,height:"40%",width:"50%",padding:"2rem 1rem 2rem 1rem",fontWeight:"bold", backgroundColor:"rgb(93, 93, 219)",borderRadius:"10%"}} onSubmit={submitHandler}>
        <h2 style={{textAlign:"center",fontSize:"35px",color:"CaptionText",fontWeight:"600",fontFamily:"monospace"}}>{signup ? "Sign Up" : "Log In " }</h2>
        <Form.Group className="mb-3" controlId="Email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" ref={EmailRef} placeholder="Enter Email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="Password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" ref={PassRef} placeholder="Enter Password" />
      </Form.Group>
      {signup && (<Form.Group className="mb-3" controlId="ConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" ref={ConfirmPassRef} placeholder="Enter Password Again to Confirm" />
        <Form.Text muted>Enter Your Password Again To Confirm</Form.Text>
      </Form.Group>)}
      <Button variant="primary" type="submit" style={{marginLeft:"40%",marginRight:"40%"}}>{signup ? "Sign Up" : "Log In"}</Button>
      <Button variant = "outline-info" onClick={ChangeHandler} style={{marginLeft:"16%",marginRight:"16%",marginTop:"1rem"}} >Already Have An Account ? Log In to Continue</Button>
        </Form>
        </Card.Body>
        </Card>
            
        
        
    </Fragment>);
};

export default Auth;