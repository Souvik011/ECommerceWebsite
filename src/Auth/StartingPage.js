import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const StartingPage = () => {
    return <div >
        <Card>
            <Card.Body style={{height:"95%",width:"100%"}}>
                <Card.Text style={{fontFamily:"Headline",fontWeight:"Bold" ,fontStyle:"oblique" , Color :"Green" , textAlign:"center"}}> Welcome TO E Commerce Website</Card.Text>
            </Card.Body>
            <h3 style={{marginTop:"20%",fontWeight:"bold",fontStyle:"revert-layer",color:"brown" ,textAlign:"center"}}>TO LOG IN OR SIGN UP CLICK THE BELOW BUTTON </h3>
            <div style={{display:"inline-flex" , justifyContent:"center" , margin:"2% 0% 3% 0%"}}>
            <Link to="/auth"><Button variant="outline-primary" style={{marginRight:"3rem"}}>Log In</Button></Link>
            <Link to="/auth"><Button variant="outline-primary ">Sign Up</Button></Link>
            </div>
            
        </Card>
    </div>
};

export default StartingPage;