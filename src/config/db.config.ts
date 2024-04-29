import { registerAs } from '@nestjs/config';

export const dbConfig = registerAs('db', () => ({
  url: process.env.MONGODB_HOST,
  // port: parseInt(process.env.DB_PORT, 10),
  // username: process.env.DB_USER,
  // password: process.env.DB_PASS,
  // database,
}));
