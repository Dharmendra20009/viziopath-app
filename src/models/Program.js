// Represents internships/courses Viziopath offers
import mongoose from 'mongoose';

const programSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    category: { type: String, enum: ['Internship', 'Course', 'Event'], default: 'Internship' },
    shortDesc: String,
    syllabus: [String],
    price: { type: Number, default: 0 },
    mode: { type: String, enum: ['Online', 'Offline', 'Hybrid'], default: 'Online' },
    durationWeeks: { type: Number, default: 4 },
    seats: { type: Number, default: 50 },
    isActive: { type: Boolean, default: true }
  },
  { timestamps: true }
);

export default mongoose.model('Program', programSchema);