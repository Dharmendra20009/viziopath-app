import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { connectDB } from './config/db.js';
import { apiLimiter } from './middleware/rateLimit.js';
import { notFound, errorHandler } from './middleware/error.js';
import authRoutes from './api/auth.js';
import projectRoutes from './api/projects.js';
import programRoutes from './api/programs.js';
import postRoutes from './api/posts.js';
import contactRoutes from './api/contact.js';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './docs/swagger.js';

dotenv.config();

const app = express();

// Security & Core Middleware
app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_ORIGIN?.split(',') || '*', credentials: true }));
app.use(express.json({ limit: '1mb' }));
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));
app.use('/api', apiLimiter);

// Health check
app.get('/health', (req, res) => res.json({ ok: true, env: process.env.NODE_ENV || 'dev' }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/programs', programRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/contact', contactRoutes);

// Docs
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// 404 & Error Handling
app.use(notFound);
app.use(errorHandler);

// Start Server
const PORT = process.env.PORT || 5000;
connectDB().then(() => {
  app.listen(PORT, () => console.log(`🚀 Server listening on http://localhost:${PORT}`));
});

node [server.js](http://_vscodecontentref_/0)
