import React, { useContext } from 'react'
import { ProductContext } from '../../Context/Products'
import UICard from '../UI/Card'
import './Products.css'

export default function Products() {
    const prodCtx = useContext(ProductContext)
    let itemLen = (prodCtx.productList.length)
    // let itemLen = 0
  return (
    <div className='productsDiv'>
        {itemLen>0?
        prodCtx.productList.map((item)=>{
            return(
                  <UICard 
                key={item.title}
                data={item}
                text={'Price: $'+item.price}
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
