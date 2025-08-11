import crypto from 'crypto';
import { db } from '../lib/db';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') return res.status(405).send('Method not allowed');

  try {
    const { order_id, payment_id, signature, userId } = req.body || {};
    if (!order_id || !payment_id || !signature) {
      return res.status(400).json({ ok: false, error: 'Missing fields' });
    }

    const body = `${order_id}|${payment_id}`;
    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET as string)
      .update(body)
      .digest('hex');

    const isValid = expectedSignature === signature;
    if (isValid && userId) {
      await db.query('UPDATE users SET isPaid = 1 WHERE id = ?', [userId]);
    }
    return res.status(200).json({ ok: isValid });
  } catch (error: any) {
    return res.status(500).json({ ok: false, error: error?.message || 'Server error' });
  }
}


