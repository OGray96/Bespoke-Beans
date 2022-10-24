const mongoose = require('mongoose')

const { Schema } = require('mongoose');
const bcrypt = require('bcrypt');
const Order = require('./Order')

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!']
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    savedOrders:[Order.schema]
},
{
    toJSON: {
        virtuals: true
    }
}
);

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
});
  
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};
  
userSchema.virtual('ordersCount').get(function () {
    return this.savedOrders.length;
});
  
const User = mongoose.model('User', userSchema);
  
module.exports = User;
  
