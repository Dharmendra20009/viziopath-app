import express from 'express';
import { body, validationResult } from 'express-validator';
import Inquiry from '../models/Inquiry.js';
import { sendContactEmail } from '../utils/email.js';
import { contactLimiter } from '../middleware/rateLimit.js';

const router = express.Router();

router.post(
  '/',
  contactLimiter,
  [body('name').notEmpty(), body('email').isEmail(), body('message').isLength({ min: 10 })],
  async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
      const inquiry = await Inquiry.create(req.body);
      await sendContactEmail(req.body).catch(console.error);
      res.status(201).json({ message: 'Inquiry received', id: inquiry._id });
    } catch (e) { next(e); }
  }
);

router.get('/', async (req, res, next) => {
  try { res.json(await Inquiry.find().sort({ createdAt: -1 })); }
  catch (e) { next(e); }
});

export default router;
