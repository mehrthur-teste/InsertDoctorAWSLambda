const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({  
  firstName: String,
  lastName: String,
  password: String,
  age: String,
  mfa: string
});
module.exports = mongoose.model('User', UserSchema);