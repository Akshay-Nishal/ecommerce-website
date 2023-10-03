import { useState } from 'react';
import './App.css';
import Products from './Components/Body/Products';
import Cart from './Components/Cart/Cart';
import HeaderNav from './Components/Header/HeaderNav';
import Footer from './Components/Foorer/Footer';
function App() {
  const [cartState,setCartState] = useState(false)
  const cartStateChange =()=>{
    setCartState(prev=>!(prev))
    // console.log("State Changed to: ",cartState)
  }
  return (
    <>
      <HeaderNav cartStateChange={cartStateChange}/>
      {cartState?
        <Cart cartStateChange={cartStateChange}/>
      :
        <></>
      }
      <Footer/>
    </>
  )
}

export default App;
