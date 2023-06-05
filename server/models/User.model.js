const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please add a username'],
    unique: true,
    trim: true,
    maxLength: [50, 'Name can not be more than 50 characters'],
  },
  password: {
    type: String,
    required: [true, 'Please add a password'],
    unique: true,
    trim: true,
    maxLength: [50, 'Password can not be more than 50 characters'],
  },
  email: {
    type: String,
    required: [true, 'Please add an email address'],
    match: [
      /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/,
      'Please add a valid email address',
    ],
    unique: true,
    trim: true,
    maxLength: [50, 'Password can not be more than 50 characters'],
  },
  slug: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('User', UserSchema);
