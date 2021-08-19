const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];

    if (!token) {
      return res
        .status(403)
        .send({ message: 'A token is required for authentication' });
    }

    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    req.user = decoded;
    return next();
  } catch (e) {
    return res.status(401).json({ message: 'No authorization' });
  }
};
