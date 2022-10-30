const db = require('./config/connection');
const { Product } = require('./models');

const productData = require('./data.json');

db.once('open', async () => {
  await Product.deleteMany({});

  const technologies = await Product.insertMany(productData);

  console.log('Products seeded!');
  process.exit(0);
});

  