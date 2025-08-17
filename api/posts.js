import express from 'express';
import { body, validationResult } from 'express-validator';
import Post from '../models/post.js'; // ✅ fixed case
import { auth } from '../middleware/auth.js';

const router = express.Router();

// Get all published posts
router.get('/', async (req, res, next) => {
  try {
    const posts = await Post.find({ status: 'published' }).sort({ createdAt: -1 });
    res.json(posts);
  } catch (e) {
    next(e);
  }
});

// Get single published post by slug
router.get('/:slug', async (req, res, next) => {
  try {
    const post = await Post.findOne({ slug: req.params.slug, status: 'published' });
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.json(post);
  } catch (e) {
    next(e);
  }
});

// Create a new post
router.post(
  '/',
  auth(['admin', 'editor']),
  [
    body('title').notEmpty().withMessage('Title is required'),
    body('slug').notEmpty().withMessage('Slug is required'),
  ],
  async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array().map(e => ({ field: e.path, msg: e.msg })),
        });
      }

      const exists = await Post.findOne({ slug: req.body.slug });
      if (exists) return res.status(409).json({ message: 'Slug already exists' });

      const doc = await Post.create(req.body);
      res.status(201).json(doc);
    } catch (e) {
      next(e);
    }
  }
);

// Update a post
router.put(
  '/:id',
  auth(['admin', 'editor']),
  [
    body('title').optional().notEmpty().withMessage('Title cannot be empty'),
    body('slug').optional().notEmpty().withMessage('Slug cannot be empty'),
  ],
  async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array().map(e => ({ field: e.path, msg: e.msg })),
        });
      }

      // Check slug uniqueness if slug is being updated
      if (req.body.slug) {
        const exists = await Post.findOne({ slug: req.body.slug, _id: { $ne: req.params.id } });
        if (exists) return res.status(409).json({ message: 'Slug already exists' });
      }

      const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!post) return res.status(404).json({ message: 'Post not found' });
      res.json(post);
    } catch (e) {
      next(e);
    }
  }
);

// Delete a post
router.delete('/:id', auth(['admin']), async (req, res, next) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.status(204).end();
  } catch (e) {
    next(e);
  }
});

export default router;
