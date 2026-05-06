const mongoose = require('mongoose');

let userSchema = mongoose.Schema({
     name: String,

     // Only for students
     usn: {
          type: String,
          index: { 
               unique: true, 
               sparse: true // Allows multiple null/undefined values for admins
          }
     },

     email: {
          type: String,
          required: true,
          unique: true,
          index: true,
          lowercase: true,
          trim: true
     },
     password: {
          type: String,
          required: true
     },

     // "student" or "admin"
     role: {
          type: String,
          enum: ['student', 'admin'],
          required: true
     },

     // Refresh token (hashed)
     refreshTokenHash: String,
     refreshTokenExpires: Date,

     // Only students will use this
     projects: [
          {
               type: mongoose.Schema.Types.ObjectId,
               ref: 'Project'
          }
     ],

     // Only admins will use this
     roomsCreated: [
          {
               type: mongoose.Schema.Types.ObjectId,
               ref: 'Room'
          }
     ]
});

module.exports = mongoose.model('User', userSchema);