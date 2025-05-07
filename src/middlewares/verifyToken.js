import jwt from 'jsonwebtoken'

const JWT_SECRET = 'secretkey';

const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) return res.status(401).json({ message: 'Authorization header missing' });

  const token = authHeader.split(' ')[1]; 
  if (!token) return res.status(401).json({ message: 'Token missing' });

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message: 'Token invalid or expired' });

    req.user = decoded; 
    next();
  });
};

export default verifyToken;
