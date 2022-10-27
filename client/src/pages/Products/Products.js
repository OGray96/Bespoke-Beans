import React, { useContext } from 'react';
import { motion } from 'framer-motion';

import './Products.css';
import { CartContext } from '../../context';
import { products } from '../../data';

export default function Products(props) {
  const items = props.items || products;
  const cart = useContext(CartContext);

  return (
    <div className='products'>
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

      <div className='products-container'>
        <div className='products-header'>
          <div className='products-header-content'>
            <h1>
              Please select from one of our Bespoke Coffee's today and we'll
              make sure it's ready for you to pick up before your boss knows you
              were even gone!
            </h1>
          </div>
        </div>

        <div className='products-main'>
          <div className='products-items'>
            {items.map((item, index) => (
              <div
                className={'products-item ' + (index % 2 ? 'dark' : 'light')}
                key={index}
              >
                <div className='products-item-content'>
                  <div className='products-item-content-container'>
                    <div className='products-item-title'>
                      <h2>{item.name}</h2>
                    </div>
                    <div className='products-item-description'>
                      <p>{item.description}</p>
                    </div>
                    <div className='products-item-price'>
                      <span>{item.price}</span>
                    </div>
                    <div className='products-item-cart-btn'>
                      <button onClick={() => cart.addOne(item.id)}>
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>

                <div className='products-item-image'>
                  <motion.img
                    initial='offscreen'
                    whileInView='onscreen'
                    viewport={{ once: true }}
                    variants={{
                      offscreen: {
                        y: 200,
                      },
                      onscreen: {
                        y: 0,
                        rotate: -10,
                        transition: {
                          type: 'spring',
                          bounce: 0.4,
                          duration: 0.8,
                        },
                      },
                    }}
                    src={item.image}
                    alt='product-placeholder.png'
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
