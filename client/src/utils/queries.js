import { gql } from '@apollo/client';

export const QUERY_PRODUCTS = gql`
  query getProducts($category: ID) {
    products(category: $category) {
      _id
      name
      description
      price
      stock
    }
  }
`;



export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;




export const QUERY_ALL_PRODUCTS = gql`
query products {
  products {
    _id
    name
    description
    price
    stripeKey
  }
}
`;


export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        date
        products {
          _id
          name
          description
          price
          stock
        }
      }
    }
  }
`;
