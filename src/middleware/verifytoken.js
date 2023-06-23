const jwt = require('jsonwebtoken');

const secretKey = 'sangat-rahasia';

const verifyToken = (req, res, next) => {
  const tokenFromHeader = req.headers.authorization || req.query.token;

  if (tokenFromHeader) {
    let token = tokenFromHeader.split(' ')[1];
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        return res.status(401).json({
          status: 401,
          message: 'Token is invalid',
          error: err,
        });
      }

      req.user = decoded;
      next();
    });
  } else {
    return res.status(401).json({
      status: 401,
      message: 'Token is not provided',
    });
  }
};

module.exports = verifyToken;
