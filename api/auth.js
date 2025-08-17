import express from 'express';
import jwt from 'jsonwebtoken';
import { body, validationResult } from 'express-validator';
import User from '../models/user.js';   // ✅ fixed case

const router = express.Router();

// Register
router.post(
  '/register',
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  ],
  async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res
          .status(400)
          .json({ errors: errors.array().map(e => ({ field: e.path, msg: e.msg })) });
      }

      const { name, email, password, role } = req.body;

      // check if email exists
      const exists = await User.findOne({ email });
      if (exists) {
        return res.status(409).json({ message: 'Email already exists' });
      }

      // create new user
      const user = await User.create({ name, email, password, role: role || 'admin' });

      res.status(201).json({ id: user._id, email: user.email });
    } catch (e) {
      next(e);
    }
  }
);

// Login
router.post(
  '/login',
  [
    body('email').isEmail().withMessage('Valid email is required'),
    body('password').notEmpty().withMessage('Password is required'),
  ],
  async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res
          .status(400)
          .json({ errors: errors.array().map(e => ({ field: e.path, msg: e.msg })) });
      }

      const { email, password } = req.body;
      const user = await User.findOne({ email });

      // check user and password
      if (!user || !(await user.comparePassword(password))) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      // generate jwt
      const token = jwt.sign(
        { id: user._id, role: user.role, email: user.email },
        process.env.JWT_SECRET || 'defaultsecret',   // ✅ fallback for dev
        { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
      );

      res.json({
        token,
        user: { id: user._id, name: user.name, email: user.email, role: user.role },
      });
    } catch (e) {
      next(e);
    }
  }
);

export default router;
