import express from 'express';
import { body, validationResult } from 'express-validator';
import Project from '../models/project.js'; // ✅ fixed case
import { auth } from '../middleware/auth.js';

const router = express.Router();

// Get all published projects
router.get('/', async (req, res, next) => {
  try {
    const projects = await Project.find({ status: 'published' }).sort({ createdAt: -1 });
    res.json(projects);
  } catch (e) {
    next(e);
  }
});

// Create a new project
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

      // Optional: prevent duplicate titles
      const exists = await Project.findOne({ title: req.body.title });
      if (exists) return res.status(409).json({ message: 'Project title already exists' });

      const project = await Project.create(req.body);
      res.status(201).json(project);
    } catch (e) {
      next(e);
    }
  }
);

// Update a project
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
        const exists = await Project.findOne({ title: req.body.title, _id: { $ne: req.params.id } });
        if (exists) return res.status(409).json({ message: 'Project title already exists' });
      }

      const updated = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updated) return res.status(404).json({ message: 'Project not found' });
      res.json(updated);
    } catch (e) {
      next(e);
    }
  }
);

// Delete a project
router.delete('/:id', auth(['admin']), async (req, res, next) => {
  try {
    const deleted = await Project.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Project not found' });
    res.status(204).end();
  } catch (e) {
    next(e);
  }
});

export default router;
