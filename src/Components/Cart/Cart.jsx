import React, { useContext } from 'react'
import './Cart.css'
import Button from 'react-bootstrap/Button';
import { CartContext } from '../../Context/CartContext';
import CartItem from './CartItem';

export default function Cart(props) {
    const cartCtx = useContext(CartContext)
    // console.log(cartCtx.cartList)
  return (
    <div className='cartDiv'>
        <div className='cartTop'> 
            <h2>Cart</h2>
            <Button onClick={props.cartStateChange} variant="danger">X</Button>
        </div>
        {cartCtx.cartList.map((item)=>{
            return(
                <CartItem
                key={item.title}
                data={item}
                />
                )
            })}
        <center>
            <Button  id='placeOrder'  style={{}} variant='primary'>Place Order</Button>
        </center>
    </div>
  )
}
