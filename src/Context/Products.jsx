import { createContext } from "react";

export const  ProductContext = createContext({
    productList : [],
    setProductList :()=>null
})




export const ProductProvider = ({children})=>{
    const addProducts = () =>{
        // console.log(defaultProducts)
    }
    const values = {
        productList:defaultProducts,
        setProductList:addProducts()
    }
    return<ProductContext.Provider value={values}>{children}</ProductContext.Provider>
}

const defaultProducts = [

    {  
    id:'C1',
    title: 'Colors', 
    price: 100, 
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png', 
    type:'Stationary',
    details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    
    {
    id:'B21',
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png', 
    type:'Stationary',
    details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'    
    },
    
    { 
    id:'Y248',
    title: 'Yellow and Black Colors',  
    price: 70, 
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png', 
    type:'Stationary',
    details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    
    { 
    id:'B589',
    title: 'Blue Color', 
    price: 100, 
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png', 
    type:'Stationary',
    details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },    

    { 
    id:'T991',
    title: 'T-Shirt', 
    price: 19.7, 
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Shirt.png', 
    type:'Clothing',
    details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
        
    { 
    id:'C66',
    title: 'Coffee', 
    price: 6.99, 
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Cofee.png',
    type:'Food',
    details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' 
    },
    ]