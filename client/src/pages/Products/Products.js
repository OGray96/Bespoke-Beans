import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";

import "./Products.css";

import { QUERY_ALL_PRODUCTS } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import { CartContext } from "../../context/CartContext";

import Auth from "../../utils/auth";



import coffee1 from "../../images/coffee1.png";
import coffee2 from "../../images/coffee2.png";
import coffee3 from "../../images/coffee3.png";
import coffee4 from "../../images/coffee4.png";
import coffee5 from "../../images/coffee5.png";
import coffee6 from "../../images/coffee6.png";

const imgArray = [coffee1, coffee2, coffee3, coffee4, coffee5, coffee6];


export default function Products(props) {
  const { loading, data } = useQuery(QUERY_ALL_PRODUCTS);
  const items = data?.products || []
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(items.id)
  console.log(items)
  if (Auth.loggedIn()) {
    return (
      <div className="products">
        {/* TESTING */}
        {/* <div
          style={{
            position: 'fixed',
            right: '3rem',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <button onClick={() => console.log(cart.items)}>Show Cart</button>
          <button onClick={() => console.log(cart.getTotal())}>Cart Total</button>
          <button onClick={() => cart.removeAll(1)}>Remove All</button>
          <button onClick={() => cart.removeOne(1)}>Remove One</button>
        </div> */}
        {/* TESTING */}
  
        <div className="products-container">
          <div className="products-header">
            <div className="products-header-content">
              <h1>
                Please select from one of our Bespoke Coffee's today and we'll
                make sure it's ready for you to pick up before your boss knows you
                were even gone!
              </h1>
            </div>
          </div>
  
          <div className="products-main">
            <div className="products-items">
              {items.map((item, index) => (
                <div
                  className={"products-item " + (index % 2 ? "dark" : "light")}
                  key={index}
                >
                  <div className="products-item-content">
                    <div className="products-item-content-container">
                      <div className="products-item-title">
                        <h2>{item.name}</h2>
                      </div>
                      <div className="products-item-description">
                        <p>{item.description}</p>
                      </div>
                      <div className="products-item-price">
                        <span>{item.price}</span>
                      </div>
                      <div className="products-item-cart-btn">
  
                        <button onClick={() => cart.addOnetoCart(item._id, item.name, item.price, item.stripeKey)} className={index % 2 ? "btn-white" : "btn-black"}>Add to Cart</button>
                      </div>
                    </div>
                  </div>
  
                  <div className="products-item-image">
                    <motion.img
                      initial="offscreen"
                      whileInView="onscreen"
                      viewport={{ once: true }}
                      variants={{
                        offscreen: {
                          y: 200,
                        },
                        onscreen: {
                          y: 0,
                          rotate: -10,
                          transition: {
                            type: "spring",
                            bounce: 0.4,
                            duration: 0.8,
                          },
                        },
                      }}
                      src={imgArray[index]}
                      alt="product-placeholder.png"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="products"> 
        <div className="products-container">
          <div className="products-header">
            <div className="products-header-content">
              <h1>
                Please select from one of our Bespoke Coffee's today and we'll
                make sure it's ready for you to pick up before your boss knows you
                were even gone!
              </h1>
            </div>
          </div>
  
          <div className="products-main">
            <div className="products-items">
              {items.map((item, index) => (
                <div
                  className={"products-item " + (index % 2 ? "dark" : "light")}
                  key={index}
                >
                  <div className="products-item-content">
                    <div className="products-item-content-container">
                      <div className="products-item-title">
                        <h2>{item.name}</h2>
                      </div>
                      <div className="products-item-description">
                        <p>{item.description}</p>
                      </div>
                      <div className="products-item-price">
                        <span>{item.price}</span>
                      </div>
                    </div>
                  </div>
  
                  <div className="products-item-image">
                    <motion.img
                      initial="offscreen"
                      whileInView="onscreen"
                      viewport={{ once: true }}
                      variants={{
                        offscreen: {
                          y: 200,
                        },
                        onscreen: {
                          y: 0,
                          rotate: -10,
                          transition: {
                            type: "spring",
                            bounce: 0.4,
                            duration: 0.8,
                          },
                        },
                      }}
                      src={imgArray[index]}
                      alt="product-placeholder.png"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  
}
