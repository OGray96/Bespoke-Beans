import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

// import { CartProvider } from '../context';
import { Footer, Navbar } from '../components';
import { Homepage, Info, Login, Products, Register, Order } from '../pages';
import CartProvider from '../context/CartContext';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <CartProvider>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <header>
            <Navbar />
          </header>
          <main>
            <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='/info' element={<Info />} />
              <Route path='/products' element={<Products />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/order' element={<Order />} />
            </Routes>
          </main>
          <footer>
            <Footer />
          </footer>
        </BrowserRouter>
      </ApolloProvider>
    </CartProvider>
  );
}
