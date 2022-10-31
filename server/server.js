const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { authMiddleware } = require('./utils/auth');
const stripe = require('stripe')("sk_test_51LwkGsE5gaX2ZMUuBd5nQtIfSwhRIgtBNsvAvjzjJW7YBQ7c3YpzeyznMCxsEQcYkJ4vaHSunjwkIFiLaWLUWrKr00WvbkLijP")
const cors = require('cors')




const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

// Serve up static assets
// app.use('/images', express.static(path.join(__dirname, '../client/images')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.post("/checkout", async (req,res) => {
  const items = req.body.items;
  let lineItems =[];
  items.forEach((item) => {
    lineItems.push({
      price: item.stripe,
      quantity: item.quantity
    })
  });

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: 'payment',
    success_url: "http://localhost:3000/",
    cancel_url: "http://localhost:3000/products"
  })

  res.send(JSON.stringify({
    url: session.url
  }))

})


// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });
  
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
  };
  
// Call the async function to start the server
  startApolloServer(typeDefs, resolvers);
