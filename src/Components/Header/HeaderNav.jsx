import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Title from './Title';
import { useContext, useEffect } from 'react';
import { CartContext } from '../../Context/CartContext';
import { Link,useNavigate} from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';
import axios from 'axios';


const cartLink = "https://imgs.search.brave.com/egBQQoJER66Hva1MI_mYgPeg2tWVYhCmuX2plYog1UM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudGhlbm91bnBy/b2plY3QuY29tL3Bu/Zy82MTIxNDc1LTIw/MC5wbmc"
const HeaderNav = (props) =>{
  const history = useNavigate()
  useEffect(() => {
    if(!localStorage.getItem('isLogin')){
      console.log("Not logge in")
      history('/login', { replace: true })
    }
  }, [])

  const userCtx = useContext(UserContext)
  const cartCtx = useContext(CartContext)
  const displayCart = () =>{
    props.cartStateChange()
  }
  const logoutHandler = () =>{
    userCtx.setCurrentUserData('')
    userCtx.setlogin(false)
    axios.put(`${localStorage.getItem('currentUserApi')}/${localStorage.getItem('urlDataId')}`,
    {
      cart:JSON.parse(localStorage.getItem('currentCart'))
    }).then(res=>console.log(res))
    localStorage.clear()
    history('/login', { replace: true })
  }
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Shop</Navbar.Brand>
          {userCtx.isLogin?
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contactus">Contact US</Nav.Link>
          </Nav>
          :
          <Nav className='me-auto'>
            <Nav.Link>Login to view full site</Nav.Link>
          </Nav>
          }
          <Nav>
            { !userCtx.isLogin && <Nav.Link as={Link} to="/login">Login</Nav.Link>}
            { userCtx.isLogin && <Nav.Link as={Link} to="/profile">Profile</Nav.Link>}
            { userCtx.isLogin &&  <Button onClick={logoutHandler} variant='secondary' className='logoutButton'>Logout</Button>}
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