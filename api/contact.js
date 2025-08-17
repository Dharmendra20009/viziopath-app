import express from 'express';
import { body, validationResult } from 'express-validator';
import Inquiry from '../models/inquiry.js';   // ✅ fixed case
import { sendContactEmail } from '../utils/email.js';
import { contactLimiter } from '../middleware/rateLimit.js';
// import { protect, admin } from '../middleware/auth.js'; // optional if you add JWT auth

const router = express.Router();

// Submit inquiry
router.post(
  '/',
  contactLimiter,
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('message').isLength({ min: 10 }).withMessage('Message must be at least 10 characters'),
  ],
  async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array().map(e => ({ field: e.path, msg: e.msg })),
        });
      }

      // save inquiry in db
      const inquiry = await Inquiry.create(req.body);

      // send email
      let emailStatus = 'sent';
      try {
        await sendContactEmail(req.body);
      } catch (err) {
        console.error('❌ Email failed:', err.message);
        emailStatus = 'failed';
      }

      res.status(201).json({ 
        message: 'Inquiry received', 
        id: inquiry._id, 
        emailStatus 
      });
    } catch (e) {
      next(e);
    }
  }
);

// Get all inquiries (🔒 should be admin-protected later)
router.get('/', async (req, res, next) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });
    res.json(inquiries);
  } catch (e) {
    next(e);
  }
});

export default router;
