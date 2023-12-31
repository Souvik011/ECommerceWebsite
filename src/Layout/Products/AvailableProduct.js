import React,{Fragment} from "react";
import Products from "./Products";

const AvailableProduct = (props) => {
    const productsArr = [
        {
          id: "1",
      
          title: "Colors",
      
          price: 100,
      
          imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
        },
      
        {
          id: "2",
      
          title: "Black and white Colors",
      
          price: 50,
      
          imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
        },
      
        {
          id: "3",
      
          title: "Yellow and Black Colors",
      
          price: 70,
      
          imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
        },
      
        {
          id: "4",
      
          title: "Blue Color",
      
          price: 100,
      
          imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
        },
      ];

      return (<Fragment>
        <div style={{display:"flex"}}>
            <ul style={{ display:"flex", flexWrap:"wrap" , justifyContent:"space-around" , alignItems:"center"}}>
            {productsArr.map((item) => {
          return (
            <Products
            key={Math.random()}
            id={item.id}
            title={item.title}
            price={item.price}
            image={item.imageUrl}
            quantity={1}
            />
          );
        })}
            </ul>
        </div>

      </Fragment>);
};

export default AvailableProduct;

