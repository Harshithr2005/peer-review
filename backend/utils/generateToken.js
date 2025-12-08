const jwt = require('jsonwebtoken');

const generateToken = (user) => {
     return jwt.sign({ usn: user.usn, _id: user._id}, process.env.JWT_KEY)
}

module.exports.generateToken = generateToken;