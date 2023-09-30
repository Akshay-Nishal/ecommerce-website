import { createContext } from "react";

export const  ProductContext = createContext({
    productList : [],
    setProductList :()=>null
})




export const ProductProvider = ({children})=>{
    const addProducts = () =>{
        console.log(defaultProducts)
    }
    const values = {
        productList:defaultProducts,
        setProductList:addProducts()
    }
    return<ProductContext.Provider value={values}>{children}</ProductContext.Provider>
}

const defaultProducts = [

    {  
    title: 'Colors', 
    price: 100, 
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png', 
    },
    
    {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png', 
    },
    
    { 
    title: 'Yellow and Black Colors',  
    price: 70, 
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png', 
    },
    
    { 
    title: 'Blue Color', 
    price: 100, 
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png', 
    },    

    { 
    title: 'T-Shirt', 
    price: 19.7, 
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Shirt.png', 
    },
        
    { 
        title: 'Coffee', 
        price: 6.99, 
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Cofee.png', 
        },
    ]