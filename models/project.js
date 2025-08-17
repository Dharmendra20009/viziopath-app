import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    techStack: [String],
    link: String,
    image: String,
    featured: { type: Boolean, default: false },
    status: { type: String, enum: ['draft', 'published'], default: 'published' }
  },
  { timestamps: true }
);

export default mongoose.model('Project', projectSchema);