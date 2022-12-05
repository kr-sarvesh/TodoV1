const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is Required'],
    trim: true,
    maxlength: [25, 'Name cannot be more than 20 characters'],
  },
  email: {
    type: String,
    required: [true, 'Email is Required'],
    trim: true,
    unique: true,
  },
})
module.exports = mongoose.model('User', userSchema)
