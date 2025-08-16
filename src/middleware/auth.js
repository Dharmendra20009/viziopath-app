import jwt from 'jsonwebtoken';

export const auth = (roles = []) => {
  return (req, res, next) => {
    try {
      const header = req.headers.authorization || '';
      const token = header.startsWith('Bearer ') ? header.split(' ')[1] : null;
      if (!token) return res.status(401).json({ message: 'Missing token' });
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      if (roles.length && !roles.includes(decoded.role)) {
        return res.status(403).json({ message: 'Forbidden' });
      }
      next();
    } catch (e) {
      return res.status(401).json({ message: 'Invalid token' });
    }
  };
};