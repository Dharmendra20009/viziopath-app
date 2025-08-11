import { db } from '../../lib/db';

export default async function handler(req: any, res: any) {
  try {
    // For demo: read userId from query, header, or default to 1
    const userId = Number(req.query.userId || req.headers['x-user-id'] || 1);
    const rows = (await db.query('SELECT isPaid FROM users WHERE id = ? LIMIT 1', [userId])) as any[];
    const isPaid = rows?.[0]?.isPaid === 1 || rows?.[0]?.isPaid === true;
    return res.status(200).json({ isPaid });
  } catch (e: any) {
    return res.status(200).json({ isPaid: false });
  }
}


