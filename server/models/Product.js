const mongoose = require('mongoose')
const { Schema } = require('mongoose');

const productSchema = new Schema({
    name: {
      type: String,
      required: true,
    },
    description:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    stripeKey: {
        type: String
    }
 
});

const Product = mongoose.model('Product', productSchema);
  
module.exports = Product;
  