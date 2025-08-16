import express from 'express';
import { body, validationResult } from 'express-validator';
import Post from '../models/Post.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try { res.json(await Post.find({ status: 'published' }).sort({ createdAt: -1 })); }
  catch (e) { next(e); }
});

router.get('/:slug', async (req, res, next) => {
  try {
    const post = await Post.findOne({ slug: req.params.slug, status: 'published' });
    if (!post) return res.status(404).json({ message: 'Not found' });
    res.json(post);
  } catch (e) { next(e); }
});

router.post('/', auth(['admin', 'editor']), [body('title').notEmpty(), body('slug').notEmpty()], async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    const doc = await Post.create(req.body);
    res.status(201).json(doc);
  } catch (e) { next(e); }
});

router.put('/:id', auth(['admin', 'editor']), async (req, res, next) => {
  try { res.json(await Post.findByIdAndUpdate(req.params.id, req.body, { new: true })); }
  catch (e) { next(e); }
});

router.delete('/:id', auth(['admin']), async (req, res, next) => {
  try { await Post.findByIdAndDelete(req.params.id); res.status(204).end(); }
  catch (e) { next(e); }
});

export default router;
