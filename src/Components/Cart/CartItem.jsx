import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import './Cart.css'
import { CartContext } from '../../Context/CartContext';

export default function CartItem(props) {
  const cartCtx = useContext(CartContext)
    const item = props.data
    // console.log("Cart Item : ",item)
    const itemRemoveHandler = ()=>{
      cartCtx.onRemove(item.title)
    }

  return (
    <div className='cartItem'>
        <img src={item.imageUrl} alt={item.title} />
        <span id='cartItemTitle'>{item.title} </span>
        <span>$ {item.price}</span>
        <input type="number" placeholder={item.quantity} />
        <Button id='removeItem' onClick={itemRemoveHandler} variant='danger'>Remove</Button>
    </div>
  )
}
