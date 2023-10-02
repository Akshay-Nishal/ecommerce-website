import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Title from './Title';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
const cartLink = "https://imgs.search.brave.com/egBQQoJER66Hva1MI_mYgPeg2tWVYhCmuX2plYog1UM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudGhlbm91bnBy/b2plY3QuY29tL3Bu/Zy82MTIxNDc1LTIw/MC5wbmc"


const HeaderNav = (props) =>{
  const cartCtx = useContext(CartContext)
  const displayCart = () =>{
    props.cartStateChange()
  }
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Button onClick={displayCart}>
            <img style={{height:'25px'}} id='cartButtonImg' src={cartLink} alt="Cart" />
            <b style={{fontSize:'18px',color:'black'}}> {cartCtx.cartNumber}</b>
          </Button>
        </Container>
      </Navbar>
      <Title/>
    </>
  );
}

export default HeaderNav;