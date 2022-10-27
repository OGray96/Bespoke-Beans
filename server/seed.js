const db = require('./config/connection');
const { Product } = require('./models');

const techData = require('./data.json');

db.once('open', async () => {
  await Product.deleteMany({});

  const technologies = await Product.insertMany(techData);

  console.log('Technologies seeded!');
  process.exit(0);
});

  