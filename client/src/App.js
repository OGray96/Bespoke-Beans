import { Routes, Route } from "react-router-dom";
import "./pages/Homepage";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import Info from "./pages/Info";
import LoginSignup from "./pages/LoginSignup";
import { setContext } from '@apollo/client/link/context';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';


// import Container from "./components/container.js";
import Navbar from "./components/Navbar.js";


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


function App() {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Info" element={<Info />} />
        <Route path="/Login" element={<LoginSignup />} />
      </Routes>
      <Footer />
    </ApolloProvider>
  );
}

export default App;
