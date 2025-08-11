import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: process.env.DB_HOST as string,
  user: process.env.DB_USER as string,
  password: process.env.DB_PASSWORD as string,
  database: process.env.DB_NAME as string,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export const db = {
  query: async (sql: string, params?: any[]) => {
    const [rows] = await pool.execute(sql, params);
    return rows as any;
  },
};



