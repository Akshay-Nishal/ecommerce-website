import { useState } from 'react';
import './App.css';
import Cart from './Components/Cart/Cart';
import HeaderNav from './Components/Header/HeaderNav';
import Footer from './Components/Foorer/Footer';
import { BrowserRouter, Route, Link, NavLink, Routes} from 'react-router-dom';
import Home from './Components/Body/Home';
import Products from './Components/Body/Products';
import About from './Components/Body/About';
import ContactUS from './Components/Body/ContactUS';
import ProductDetails from './Components/Body/ProductDetails';



function App() {
  const [cartState,setCartState] = useState(false)
  const cartStateChange =()=>{
    setCartState(prev=>!(prev))
    // console.log("State Changed to: ",cartState)
  }
  return (
    <BrowserRouter>
      <HeaderNav cartStateChange={cartStateChange}/>
      {cartState?
        <Cart cartStateChange={cartStateChange}/>
      :
        <></>
      }
      <Routes>
        <Route path="/" element={<Home/>}t ></Route>
        <Route path="/products" element={<Products/>} ></Route>
        <Route path="/about" element={<About/>} ></Route>
        <Route path="/contactus" element={<ContactUS/>} ></Route>
        <Route path="/products/:productID" element={<ProductDetails/>} ></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;
