import React from 'react'
import Button from 'react-bootstrap/Button';
import './Cart.css'

export default function CartItem(props) {

    const item = props.data
    // console.log("Cart Item : ",item)
  return (
    <div className='cartItem'>
        <img src={item.imageUrl} alt={item.title} />
        <span id='cartItemTitle'>{item.title} </span>
        <span>$ {item.price}</span>
        <input type="number" placeholder={item.quantity} />
        <Button id='removeItem' variant='danger'>Remove</Button>
    </div>
  )
}
