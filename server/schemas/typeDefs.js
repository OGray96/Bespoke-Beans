const { gql } = require('apollo-server-express');

const typeDefs = gql `

type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    savedOrders: [Order]
}

type Product {
    _id: ID
    name: String
    description: String
    price: Float
    stock: Int
    stripeKey: String
}

type Order {
    _id: ID
    date: String
    products: [Product]
}

type Checkout {
    session: ID
}

type Auth {
    token: ID
    user: User
}

type Query {
    product(_id: ID!): Product
    products: [Product]
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
}


type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
}
`

module.exports = typeDefs;