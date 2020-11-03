const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
require('dotenv').config();

const jwtKey = process.env.JWT_SECRET;

// Authenticate Token for user
function protect (req, res, next) {
  const token = req.headers.authorization;
  if ( token ) {
    jwt.verify(token, jwtKey, (err, decodedToken) => {
      if (err) res.status(401).json({ message: 'Invalid token.'});
      else next();
    });
  } else res.status(401).json({ message: 'No token provided.'})
}

// Authenticate Token for admin
function restricted (req, res, next) {
  const token = req.headers.authorization;
  if ( token ) {
    jwt.verify(token, jwtKey, (err, decodedToken) => {
      if (err) res.status(401).json({ message: 'Invalid token.'});
      else if (decodedToken.account_type !== 'admin'){
        res.status(403).json({ message: 'This is a restricted route' })
      } else next()
    });
  } else res.status(401).json({ message: 'No token provided.'})
}

function generateToken(user) {
  const payload = {
    id: user.id,
    email: user.email,
    account_type: user.account_type,
  }

  const options = { expiresIn: '1w' }
  return jwt.sign(payload, jwtKey, options);
}

module.exports = {
  jwtKey,
  protect,
  restricted,
  generateToken
}