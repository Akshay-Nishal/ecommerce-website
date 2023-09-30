import { createContext } from "react";

export const  CartContext = createContext({
    cartList : [],
    setCartList :()=>null
})




export const CartProvider = ({children})=>{
    const addCarts = () =>{
        // console.log(defaultCarts)
    }
    const values = {
        cartList:defaultCarts,
        setCartList:addCarts()
    }
    return<CartContext.Provider value={values}>{children}</CartContext.Provider>
}

const defaultCarts = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    quantity: 2,
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    quantity: 3,
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    quantity: 1,
    
    }
    
    ]