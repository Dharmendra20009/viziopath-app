import express from 'express';
import { body, validationResult } from 'express-validator';
import Program from '../models/program.js'; // ✅ fixed case
import { auth } from '../middleware/auth.js';

const router = express.Router();

// Get all active programs
router.get('/', async (req, res, next) => {
  try {
    const programs = await Program.find({ isActive: true }).sort({ createdAt: -1 });
    res.json(programs);
  } catch (e) {
    next(e);
  }
});

// Create a new program
router.post(
  '/',
  auth(['admin', 'editor']),
  [body('title').notEmpty().withMessage('Title is required')],
  async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array().map(e => ({ field: e.path, msg: e.msg })),
        });
      }

      // Optional: check duplicate
      const exists = await Program.findOne({ title: req.body.title });
      if (exists) return res.status(409).json({ message: 'Program title already exists' });

      const program = await Program.create(req.body);
      res.status(201).json(program);
    } catch (e) {
      next(e);
    }
  }
);

// Update a program
router.put(
  '/:id',
  auth(['admin', 'editor']),
  [body('title').optional().notEmpty().withMessage('Title cannot be empty')],
  async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array().map(e => ({ field: e.path, msg: e.msg })),
        });
      }

      // Optional: check duplicate if title is updated
      if (req.body.title) {
        const exists = await Program.findOne({ title: req.body.title, _id: { $ne: req.params.id } });
        if (exists) return res.status(409).json({ message: 'Program title already exists' });
      }

      const updated = await Program.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updated) return res.status(404).json({ message: 'Program not found' });
      res.json(updated);
    } catch (e) {
      next(e);
    }
  }
);

// Delete a program
router.delete('/:id', auth(['admin']), async (req, res, next) => {
  try {
    const deleted = await Program.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Program not found' });
    res.status(204).end();
  } catch (e) {
    next(e);
  }
});

export default router;
