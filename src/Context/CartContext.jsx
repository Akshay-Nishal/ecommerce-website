import { createContext, useReducer, useState } from "react";

export const  CartContext = createContext({
    cartList : [],
    cartNumber : null,
    totalAmount : null,
    onAdd:(item)=>{},
    onOrder:()=>{}
})


// const defaultCart ={
//     items:[
//         {title: 'Colors', price: 100,imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',quantity: 2,},
//         { title: 'Black and white Colors', price: 50,imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',quantity: 3, },
//         {title: 'Yellow and Black Colors',price: 70,imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',quantity: 1, }
//     ],
//     totalCartAmount:420,
//     cartNumber:6
// }

const defaultCart ={
    items:[],
    totalCartAmount:0,
    cartNumber:0
}


const cartReducer = (state,action) => {
    // console.log("Add Called");
    if(action.type==='Add'){
        const updatedCartNumber = state.cartNumber+1
        const updatedTotalAmount = state.totalCartAmount + action.item.price
        let newList = state.items

        let ind = state.items.findIndex((it)=>it.title===action.item.title)
        console.log("Index : ",ind);
        if(ind!==-1){
            console.log("Appended");
            newList[ind].quantity+=1
            return{
                items:newList,
                totalCartAmount : updatedTotalAmount,
                cartNumber : updatedCartNumber
            }
        }
        if(ind===-1){
            console.log("Added New");
            action.item.quantity = 1
            newList.push(action.item)
            return{
                items:newList,
                totalCartAmount : updatedTotalAmount,
                cartNumber : updatedCartNumber
            }
        }
    }
    if(action.type==='Order'){
        window.alert("Order Placed Successfully!!!")
        return{
            items:[],
            totalCartAmount:0,
            cartNumber:0
        }
    }
    return(defaultCart)
}


export const CartProvider = ({children})=>{
    const [cartState,dispatchState]=useReducer(cartReducer,defaultCart)

    
    const addItem = (item) =>{
        dispatchState({type:'Add',item:item})
    }
    const placeOrder = () =>{
        dispatchState({type:'Order'})
    }


    
    const values = {
        cartList : cartState.items,
        cartNumber : cartState.cartNumber,
        totalAmount : cartState.totalCartAmount,
        onAdd : addItem,
        onOrder : placeOrder}


    return<CartContext.Provider value={values}>{children}</CartContext.Provider>
}


































// const defaultCarts = [

//     {
    
//     title: 'Colors',
    
//     price: 100,
    
//     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
//     quantity: 2,
    
//     },
    
//     {
    
//     title: 'Black and white Colors',
    
//     price: 50,
    
//     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
//     quantity: 3,
    
//     },
    
//     {
    
//     title: 'Yellow and Black Colors',
    
//     price: 70,
    
//     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
//     quantity: 1,
    
//     }
    
//     ]