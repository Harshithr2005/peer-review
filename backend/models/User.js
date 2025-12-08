const mongoose = require('mongoose');

let userSchema = mongoose.Schema({
     name: String,
     usn: String,
     email: String,
     password: String,
     role: String
});

module.exports = mongoose.model('user', userSchema);