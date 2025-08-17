import mongoose from 'mongoose';

const inquirySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: String,
    subject: String,
    message: { type: String, required: true },
    source: { type: String, default: 'website' },
    handled: { type: Boolean, default: false }
  },
  { timestamps: true }
);

export default mongoose.model('Inquiry', inquirySchema);