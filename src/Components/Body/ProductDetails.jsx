import React, { useContext } from 'react'
import { useParams } from 'react-router'
import { ProductContext } from '../../Context/Products'
import { Link } from 'react-router-dom'
import './ProductDetails.css'
import { CartContext } from '../../Context/CartContext'




export default function ProductDetails() {
    const param = useParams()
    // console.log(param)
    const pID = param.productID
    const prodCtx = useContext(ProductContext)
    const cartCtx = useContext(CartContext)
    const ind = prodCtx.productList.findIndex((item)=>item.id===pID)
    // console.log(prodCtx.productList[ind]);
    const product = prodCtx.productList[ind]
    const addToCart =()=>{
        console.log("Added : ",product)
        cartCtx.onAdd(product)
    }
  return (
    <div className='product'>
        <div className='imageDiv'>
            <img src={product.imageUrl} alt="" />
            <div className='imageDivButtons'>
                <button onClick={addToCart}>Add To Cart</button>
                <Link to='../products'>
                    <button id='goBack'>Go Back</button>
                </Link>
            </div>
        </div>
        <div className='infoDiv'>
            <p className='smallGreyText'>{product.type}</p>
            <h3>{product.title}</h3>
            <div className='priceDiv'>
            <span id='discPrice'>${product.price}</span>
            <span id='origPrice'>${(product.price*1.5).toFixed(2)}</span>
            <span id='offPercent'>33% off</span>
            </div>
            <p className='smallGreyText'>Details</p>
            <p>{product.details}</p>
        </div>  
    </div>
  )
}
