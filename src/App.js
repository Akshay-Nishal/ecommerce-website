import { useContext, useEffect, useState } from 'react';
import './App.css';
import Cart from './Components/Cart/Cart';
import HeaderNav from './Components/Header/HeaderNav';
import Footer from './Components/Foorer/Footer';
import { BrowserRouter, Route, Link, NavLink, Routes, Navigate} from 'react-router-dom';
import Home from './Components/Body/Home';
import Products from './Components/Body/Products';
import About from './Components/Body/About';
import ContactUS from './Components/Body/ContactUS';
import ProductDetails from './Components/Body/ProductDetails';
import LoginPage from './Components/Login/LoginPage';
import ProfilePage from './Components/Profile/ProfilePage';
import { UserContext } from './Context/UserContext';
import { clear } from '@testing-library/user-event/dist/clear';






function App() {
  const userCtx = useContext(UserContext)
  const [cartState,setCartState] = useState(false)
  // const [timeRem,setTimeRem] = useState(0)
  const cartStateChange =()=>{
    setCartState(prev=>!(prev))
    // console.log("State Changed to: ",cartState)
  }
  useEffect(() => {
    let ctim = new Date()
    let timRem = Math.abs(ctim.getMinutes() - parseInt(localStorage.getItem('time')))
    console.log("Remaning time : ",timRem)
    if(timRem>5){
      userCtx.setlogin(false)
      userCtx.setCurrentUserData('')
      localStorage.clear()
    }
    else if(localStorage.getItem('isLogin') && localStorage.getItem('currentUserData')){
      userCtx.setlogin(localStorage.getItem('isLogin'))
      userCtx.setCurrentUserData(JSON.parse(localStorage.getItem('currentUserData')))
    }
  }, [])
  

  
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
        { userCtx.isLogin && <Route path="/profile" element={<ProfilePage/>} ></Route>}
        { !userCtx.isLogin && <Route path="/login" element={<LoginPage/>} ></Route>}
        <Route path="*" element={<Navigate to='/'/>} ></Route>
        <Route path="/products/:productID" element={<ProductDetails/>} ></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;
