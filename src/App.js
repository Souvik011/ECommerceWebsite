import React,{useState} from 'react';
import './App.css';
import CartBox from './Cart/CartBox';
import Footer from './Layout/Footer';
import Header from './Layout/Header';
import Store from './Pages/Store';
import Home from './Pages/Home';
import About from './Pages/About';
import { Route,Routes } from 'react-router-dom';



function App() {
  const [cartVisible,setCartVisible] = useState(false);

  const ShowCartHandler = () => {
    setCartVisible(true);
  };

  const HideCartHandler = ()  => {
    setCartVisible(false);
  };

  console.log(cartVisible);

  return (
  <div>

    <CartBox 
    show = {cartVisible}
    onHide = {HideCartHandler} 
    keyboard = {false}
    onClose={HideCartHandler} />
    <Header onShowCart = {ShowCartHandler}/>
   
     <Routes>
      <Route path='/' element={<Store />} />
      <Route path='/home' element={<Home />} />
      <Route path='/store' element={<Store />} />
      <Route path='/about' element={<About />} />
     </Routes>
    
     
      <Footer />
 
    
  </div>
  );
}

export default App;
