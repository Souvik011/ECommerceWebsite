import React, { Fragment } from "react";
import { Card,Button } from "react-bootstrap";
import classes from './Home.module.css';

const Home = (props) => {

    const buyHandler = () => {
        alert("You Have Bought The Tickets");
    };

  return (
    <Fragment>
        <div style={{paddingTop:"4rem"}}>
      <Card style={{width:"100%",height:"20rem",color:"white",backgroundColor:"rgb(161, 157, 157)"}}>
        <Card.Body style={{display:"grid",justifyContent:"center"}}>
            <Card.Title style={{fontSize:"70px",fontWeight:"700",fontVariant:"traditional",textAlign:"center",color:"white"}}>The Generics</Card.Title>   
            <Button variant="outline-info" style={{marginLeft:"1rem",height:"4rem",width:"25rem",fontSize:"25px",fontWeight:"600",color:"white"}}>Get our Latest Album</Button>  
               
        </Card.Body>
        <button className={classes.play}></button>
        
        
      </Card>
        <h2 className={classes.headline}>Tours</h2>
      <Card className={classes.div}>
        <Card.Body className={classes["tour-item"]}> 
          <Card.Text className={classes["tour-dates"]}>Jul 16</Card.Text>
          <Card.Text className={classes["tour-dates"]}>DETROIT, MI</Card.Text>
          <Card.Text className={classes.spec}>DTE ENERGY MUSIC THEATRE</Card.Text>
          <Button className={classes.buy} style={{backgroundColor:"#13afe2"}} onClick={buyHandler}>Buy Tickets</Button>
        </Card.Body>
        <Card.Body className={classes["tour-item"]}> 
          <Card.Text className={classes["tour-dates"]}>Jul 19</Card.Text>
          <Card.Text className={classes["tour-dates"]}>TORONTO,ON</Card.Text>
          <Card.Text className={classes.spec}>BUDWEISER STAGE</Card.Text>
          <Button className={classes.buy} style={{backgroundColor:"#13afe2"}} onClick={buyHandler}>Buy Tickets</Button>
        </Card.Body>
        <Card.Body className={classes["tour-item"]}> 
          <Card.Text className={classes["tour-dates"]}>Jul 22</Card.Text>
          <Card.Text className={classes["tour-dates"]}>BRISTOW, VA</Card.Text>
          <Card.Text className={classes.spec}>JIGGY LUBE LIVE</Card.Text>
          <Button className={classes.buy} style={{backgroundColor:"#13afe2"}} onClick={buyHandler}>Buy Tickets</Button>
        </Card.Body>
        <Card.Body className={classes["tour-item"]}> 
          <Card.Text className={classes["tour-dates"]}>Jul 29</Card.Text>
          <Card.Text className={classes["tour-dates"]}>PHOENIX, AZ</Card.Text>
          <Card.Text className={classes.spec}>AK-CHIN PAVILION</Card.Text>
          <Button className={classes.buy} style={{backgroundColor:"#13afe2"}} onClick={buyHandler}>Buy Tickets</Button>
        </Card.Body>
        <Card.Body className={classes["tour-item"]}> 
          <Card.Text className={classes["tour-dates"]}>Aug 2</Card.Text>
          <Card.Text className={classes["tour-dates"]}>LAS VEGAS, NV</Card.Text>
          <Card.Text className={classes.spec}>T-MOBILE ARENA</Card.Text>
          <Button className={classes.buy} style={{backgroundColor:"#13afe2"}} onClick={buyHandler}>Buy Tickets</Button>
        </Card.Body>
        <Card.Body className={classes["tour-item"]}> 
          <Card.Text className={classes["tour-dates"]}>Aug 7</Card.Text>
          <Card.Text className={classes["tour-dates"]}>CONCORD, CA</Card.Text>
          <Card.Text className={classes.spec}>CONCORD PAVILION</Card.Text>
          <Button className={classes.buy} style={{backgroundColor:"#13afe2"}} onClick={buyHandler}>Buy Tickets</Button>
        </Card.Body>
        
      </Card>
      </div>
    </Fragment>
  );
};

export default Home;
