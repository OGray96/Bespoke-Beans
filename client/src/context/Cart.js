import { createContext, useState } from 'react';

import { products } from '../data';

/**
 *
 * Create a context for the cart.
 */
export const CartContext = createContext({
  items: [],
  getTotal: () => {},
  addOne: () => {},
  removeAll: () => {},
  removeOne: () => {},
});

/**
 *
 * Create a provider for the given cart context.
 * -> This allows the context 'state' to be equal across `children`.
 * -> This allows all `children` to access the context state and methods.
 */
export function CartProvider({ children }) {
  /**
   *
   * Model: Cart
   *
   * {
   *   id: Product.id,
   *   name: Product.name
   *   price: Product.price
   *   quantity: number,
   * }
   *
   */

  const [cart, setCart] = useState([]);

  /**
   *
   * Get the total cart price.
   * @returns {number} Total cart price.
   */
  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  /**
   *
   * Add a single item to the cart. If the item already exists in the cart,
   * then update the quantity by `1`.
   * @param {Product.id} id The id of the product to add to cart.
   */
  const addOne = (id) => {
    const product = cart.find((item) => item.id === id);

    // If item exists in cart
    if (product !== undefined) {
      // Update item quantity
      setCart(
        cart.map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        )
      );
    }

    // If item doesn't exist in cart
    else {
      // Get the item details from all products
      const item = products.find((item) => item.id === id);

      // Add new item
      setCart([
        ...cart,
        {
          id: id,
          name: item.name,
          price: item.price,
          quantity: 1,
        },
      ]);
    }
  };

  /**
   *
   * Remove item type from cart.
   * @param {Product.id} id Product `id` of cart item to remove.
   */
  const removeAll = (id) => {
    setCart([...cart.filter((item) => item.id !== id)]);
  };

  const removeOne = (id) => {
    const product = cart.find((item) => item.id === id);

    // If exactly one item exists in cart
    if (product.quantity === 1) {
      // Remove the item from cart
      removeAll(id);
    }

    // If the item quantity is greater than one, only remove exactly one
    else {
      // Remove one from item quantity
      setCart(
        cart.map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
      );
    }
  };

  return (
    <CartContext.Provider
      value={{
        items: cart,
        getTotal,
        addOne,
        removeAll,
        removeOne,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
