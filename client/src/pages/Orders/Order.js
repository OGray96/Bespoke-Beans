import { CartContext } from "../../context/CartContext";
import React, { useContext, useEffect } from "react";
import { QUERY_ALL_PRODUCTS } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import "./Order.css";
import Auth from "../../utils/auth";

function Order() {
  document.title = "My Cart";
  const cart = useContext(CartContext);
  const { loading, data } = useQuery(QUERY_ALL_PRODUCTS);
  const items = data?.products || [];
  const productQuantity = cart.getProductQuantity(items.id);
  console.log(cart.items);
  console.log(productQuantity);
  if(Auth.loggedIn()){
    if (loading) {
        return (
          <>
            <h3>LOADING...</h3>
          </>
        );
      } else if ((cart.items.reduce((accum, item) => accum + item.quantity, 0)) < 1){
        return (
            <div>
                <div className="empty-cart">
                    <h3 className="empty-cart-text">Looks like you cart is empty!</h3>
                </div>
            </div>
    
            
        )
      } else {
        return (
          <>
            <div className="coffee-order-container cart-card">
              <span className="shopping">Shopping Cart</span>
              {cart.items.map((item) => (
                <div className="cart-items">
                  <span className="coffee-name-span">☕ {item.name}</span>
    
                  <div className="quantity">
                    <span className="coffee-quantity-span">✏️ {item.quantity}</span>
                    <button
                      className="up-down-btn"
                      onClick={() =>
                        cart.addOnetoCart(item._id, item.name, item.price)
                      }
                    >
                      {" "}
                      +{" "}
                    </button>
                    <button
                      className="up-down-btn"
                      onClick={() => cart.removeOneFromCart(item._id)}
                    >
                      {" "}
                      -{" "}
                    </button>
                  </div>
                  <div className="price">
                    <h3>🧾${item.price * item.quantity}</h3>
                  </div>
    
                  <br></br>
                </div>
              ))}
              <div className="total-coffees">
                <h3>
                  Total Coffees:{" "}
                  {cart.items.reduce((accum, item) => accum + item.quantity, 0)}
                </h3>
                <h3>
                  Total Price: $
                  {cart.items.reduce(
                    (accum, item) => accum + item.quantity * item.price,
                    0
                  )}
                </h3>
              </div>
              <div className="checkout-btn">
                <button className="cart-btn">Checkout</button>
              </div>
            </div>
          </>
        );
      }
  } else {
    return (
        <div>
        <div className="empty-cart">
            <h3 className="empty-cart-text">Looks like you need to login before you can look at your cart!</h3>
        </div>
    </div>  
    )
  }

}

export default Order;
