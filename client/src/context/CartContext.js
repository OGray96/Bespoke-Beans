import { createContext, useState } from "react";


//need to import proudcts from backend

export const CartContext = createContext({
    items:[],
    getProductQuantity: () => {},
    addOnetoCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {}
})

export function CartProvider({children}){

    const [cartProducts, setCartProducts] = useState([]);

    function getProductQuantity(id){
        const quantity = cartProducts.find(product => product._id === id)?.quantity

        if(quantity === undefined){
            return 0;
        }

        return quantity
    }

    function addOnetoCart(id, name, price){
        const quantity = getProductQuantity(id)

        if(quantity === 0){
            setCartProducts(
                [
                    ...cartProducts,
                    {
                        _id: id,
                        quantity: 1,
                        name: name,
                        price: price
                    }
                ]
            )
        } else {
            setCartProducts(
                cartProducts.map(
                    product =>
                    product._id === id
                    ? {...product, quantity: product.quantity + 1}
                    : product
                )
            )
        }

    }

    function removeOneFromCart (id){
        const quantity = getProductQuantity(id)

        if(quantity == 1){
            deleteFromCart(id)
        } else {
            setCartProducts(
                cartProducts.map(
                    product =>
                    product._id === id
                    ? {...product, quantity: product.quantity - 1}
                    : product
                )
            )
        }
    }

    function deleteFromCart (id){
        setCartProducts(
            cartProducts =>
            cartProducts.filter(currentProduct => {
                return currentProduct._id != id;
            })
        )
    }

    // function getTotalCost(){
    //     let totalCost = 0;
    //     const { loading, data} = useQuery(QUERY_ALL_PRODUCTS);
    //     const items = data?.products || []
    //     cartProducts.map((cartItem) => {
    //         const productData = items.id;
    //         totalCost += (productData.price * )
    //     })

    // }



    const contextValue = {
        items:cartProducts,
        getProductQuantity,
        addOnetoCart,
        removeOneFromCart,
        deleteFromCart
    }


    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider