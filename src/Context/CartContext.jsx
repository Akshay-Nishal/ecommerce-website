import { createContext, useReducer, useState } from "react";

export const  CartContext = createContext({
    cartList : [],
    cartNumber : null,
    totalAmount : null,
    onAdd:(item)=>{},
    onOrder:()=>{},
    onRemove:()=>{}
})


// const defaultCart ={
//     items:[
//         {title: 'Colors', price: 100,imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',quantity: 2,},
//         {title: 'Black and white Colors', price: 50,imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',quantity: 3, },
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
            localStorage.setItem('currentCart',JSON.stringify({
                items:newList,
                totalCartAmount : updatedTotalAmount,
                cartNumber : updatedCartNumber
            }))
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
            localStorage.setItem('currentCart',JSON.stringify({
                items:newList,
                totalCartAmount : updatedTotalAmount,
                cartNumber : updatedCartNumber
            }))
            return{
                items:newList,
                totalCartAmount : updatedTotalAmount,
                cartNumber : updatedCartNumber
            }
        }
    }
    if(action.type==='Order'){
        window.alert("Order Placed Successfully!!!")
        localStorage.setItem('currentCart',JSON.stringify({
            items:[],
            totalCartAmount:0,
            cartNumber:0
        }))
        return{
            items:[],
            totalCartAmount:0,
            cartNumber:0
        }
    }
    if(action.type==='Remove'){
        let newList = state.items
        
        let ind = state.items.findIndex((it)=>it.title===action.id)
        const updatedCartNumber = state.cartNumber - state.items[ind].quantity
        const updatedTotalAmount = state.totalCartAmount -(state.items[ind].quantity * state.items[ind].price)
        console.log("Cart Count : ",updatedCartNumber)
        console.log("Cart Amount : ",updatedTotalAmount)
        console.log("Index : ",ind);
        if(ind===0){
            newList.splice(0,1)
            console.log(newList)
        }
        else{
            newList.splice(ind,ind)
            console.log(newList)
        }
        localStorage.setItem('currentCart',JSON.stringify({
            items:newList,
            totalCartAmount : updatedTotalAmount,
            cartNumber : updatedCartNumber
        }))
        return{
            items:newList,
            totalCartAmount : updatedTotalAmount,
            cartNumber : updatedCartNumber
        }

    }
    if(action.type==='Login'){
        console.log("Inside Context Login : ",action.data)
        console.log("Cart item",action.data.items)
        console.log("Cart amount",action.data.totalCartAmount)
        console.log("Cart number",action.data.cartNumber)
        return{
            items:action.data.items,
            totalCartAmount : action.data.totalCartAmount,
            cartNumber : action.data.cartNumber
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
    const removeItem = (id) =>{
        console.log("Item Removed : ",id)
        dispatchState({type:'Remove',id:id})
    }
    const loginCart =(data)=>{
        // console.log(data)
        dispatchState({type:'Login',data:data})
    }


    
    const values = {
        cartList : cartState.items,
        cartNumber : cartState.cartNumber,
        totalAmount : cartState.totalCartAmount,
        onAdd : addItem,
        onOrder : placeOrder,
        onRemove : removeItem,
        onLogin : loginCart    
    }


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