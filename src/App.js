import React,{useState,useContext} from 'react';
import './App.css';
import CartBox from './Cart/CartBox';
import Footer from './Layout/Footer';
import Header from './Layout/Header';
import Store from './Pages/Store';
import Home from './Pages/Home';
import About from './Pages/About';
import StartingPage from './Auth/StartingPage';
import Auth from './Auth/Auth';
import Error from './Pages/Error';
import AuthContext from './Store/auth-context';
import { Route,Routes } from 'react-router-dom';



function App() {
  const AuthCtx = useContext(AuthContext);
  const [cartVisible,setCartVisible] = useState(false);
  const islogin = AuthCtx.isLoggedIn;
  console.log(islogin);

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
      <Route path='/' element={<StartingPage />} />
      {islogin ? (<Route path='/auth' element={<Store />} />) : (<Route path='/auth' element={<Auth/>} />) }
      {islogin ? (<Route path='/home' element={<Home />} />) : (<Route path='/home' element={<Error />} />)}
      {islogin ? (<Route path='/store' element={<Store />} />) : (<Route path='/store' element={<Error />} />)}
      {islogin ? (<Route path='/about' element={<About />} />) : (<Route path='/about' element={<Error />} />)}
     </Routes>
    
     
      <Footer />
 
    
  </div>
  );
}

export default App;
