import React, { useContext } from 'react'
import { ProductContext } from '../../Context/Products'
import UICard from '../UI/Card'
import './Products.css'
import { CartContext } from '../../Context/CartContext'

export default function Products() {
    const prodCtx = useContext(ProductContext)
    const cartCtx = useContext(CartContext)
    let itemLen = (prodCtx.productList.length)
    // let itemLen = 0
    const addToCart = (it) =>{
      console.log("Added",it)
      cartCtx.onAdd(it)
      
    }
  return (
    <div className='productsDiv'>
        {itemLen>0?
        prodCtx.productList.map((item)=>{
            return(
                  <UICard 
                  className='card'
                key={item.id}
                data={item}
                text={'Price: $'+item.price}
                buttonAction={'Add to cart'}
                addToCart={addToCart}
                >
                </UICard>
            )
        })
      :
        <h2>No products to show at the moment!!!</h2>
      }
      </div>
  )
}
