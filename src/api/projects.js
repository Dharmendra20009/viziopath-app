import express from 'express';
import { body, validationResult } from 'express-validator';
import Project from '../models/Project.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const projects = await Project.find({ status: 'published' }).sort({ createdAt: -1 });
    res.json(projects);
  } catch (e) { next(e); }
});

router.post('/', auth(['admin', 'editor']), [body('title').notEmpty()], async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    const doc = await Project.create(req.body);
    res.status(201).json(doc);
  } catch (e) { next(e); }
});

router.put('/:id', auth(['admin', 'editor']), async (req, res, next) => {
  try {
    const updated = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (e) { next(e); }
});

router.delete('/:id', auth(['admin']), async (req, res, next) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (e) { next(e); }
});

export default router;
