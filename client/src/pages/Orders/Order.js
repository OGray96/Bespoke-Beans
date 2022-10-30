import { CartContext } from "../../context/CartContext";
import React, { useContext, useEffect } from "react";
import {QUERY_ALL_PRODUCTS} from '../../utils/queries'
import { useQuery } from "@apollo/client";
import './Order.css'

function Order(){
    const cart = useContext(CartContext);
    const { loading, data} = useQuery(QUERY_ALL_PRODUCTS);
    const items = data?.products || []
    const productQuantity = cart.getProductQuantity(items.id)
    console.log(cart.items)
    console.log(productQuantity)
    

    if(loading){
        return(
            <>
                <h3>LOADING...</h3>
            </>
         )} else {
            return (
                <>
                <div>
                    {cart.items.map((item) => (
                       <div className="coffee-order-container">
                            <h2>Coffee Name: {item.name}</h2>
                            <h2>Quantity: {item.quantity}</h2>
                            <h2>Price per Coffee : ${item.price * item.quantity}</h2>
                            <h2>Price : ${item.price * item.quantity}</h2>
                            <button onClick={() => cart.addOnetoCart(item._id, item.name, item.price)}> + </button>
                            <button onClick={() => cart.removeOneFromCart(item._id)}> - </button>
                       </div> 
                    ))}

                </div>
                <h3>Total Coffees: {cart.items.reduce((accum,item) => accum + item.quantity, 0)}</h3>
                <h3>Total Price: ${cart.items.reduce((accum,item) => accum + (item.quantity * item.price), 0)}</h3>
                <button className="btn-black">Checkout</button>
            </>
            )
         }
}

export default Order;