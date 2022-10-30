import { CartContext } from "../../context/CartContext";
import React, { useContext, useEffect } from "react";
import {QUERY_ALL_PRODUCTS} from '../../utils/queries'
import { useQuery } from "@apollo/client";

function CartProduct(){
    const cart = useContext(CartContext);
    const { loading, data} = useQuery(QUERY_ALL_PRODUCTS);
    const items = data?.products || []
    const quantity = cart.getProductQuantity

    return (
        <> 
        <h3>Type:{items.name}</h3>
        <p>Total Coffees: {quantity}</p>
        </>
    )
}

export default CartProduct;