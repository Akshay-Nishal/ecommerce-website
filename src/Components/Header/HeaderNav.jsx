import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Title from './Title';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { BrowserRouter, Route, Link, NavLink, Routes} from 'react-router-dom';
import Home from '../Body/Home';
import About from '../Body/About';
import Products from '../Body/Products';
import ContactUS from '../Body/ContactUS';

const cartLink = "https://imgs.search.brave.com/egBQQoJER66Hva1MI_mYgPeg2tWVYhCmuX2plYog1UM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudGhlbm91bnBy/b2plY3QuY29tL3Bu/Zy82MTIxNDc1LTIw/MC5wbmc"
const HeaderNav = (props) =>{
  const cartCtx = useContext(CartContext)
  const displayCart = () =>{
    props.cartStateChange()
  }
  return (
    <BrowserRouter>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contactus">Contact US</Nav.Link>
          </Nav>
          <Button onClick={displayCart}>
            <img style={{height:'25px'}} id='cartButtonImg' src={cartLink} alt="Cart" />
            <b style={{fontSize:'18px',color:'black'}}> {cartCtx.cartNumber}</b>
          </Button>
        </Container>
      </Navbar>
      <Title/>
      <Routes>
        <Route path="/" element={<Home/>}t ></Route>
        <Route path="/products" element={<Products/>} ></Route>
        <Route path="/about" element={<About/>} ></Route>
        <Route path="/contactus" element={<ContactUS/>} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default HeaderNav;