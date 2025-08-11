import Razorpay from 'razorpay';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') return res.status(405).send('Method not allowed');

  try {
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID as string,
      key_secret: process.env.RAZORPAY_KEY_SECRET as string,
    });

    const body = req.body || {};
    const amount = Number(body.amount) > 0 ? Math.floor(Number(body.amount)) : 50000; // paise
    const currency = body.currency || 'INR';
    const receipt = body.receipt || `receipt_${Date.now()}`;

    const options = {
      amount,
      currency,
      receipt,
    } as const;

    const order = await razorpay.orders.create(options as any);
    return res.status(200).json(order);
  } catch (error: any) {
    return res.status(500).json({ error: error?.message || 'Server error' });
  }
}



