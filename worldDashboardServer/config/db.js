import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const MAX_RETRIES = 10; // Number of times to retry
const RETRY_DELAY = 5000; // 5 seconds

export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false,
  }
);

async function connectWithRetry(retries = MAX_RETRIES) {
  for (let i = 1; i <= retries; i++) {
    try {
      await sequelize.authenticate();
      console.log('Connected to database');
      return;
    } catch (err) {
      console.log(`Database connection failed (attempt ${i}): ${err.message}`);
      if (i === retries) {
        console.error('Max retries reached. Exiting.');
        process.exit(1);
      }
      await new Promise((res) => setTimeout(res, RETRY_DELAY));
    }
  }
}

connectWithRetry();
