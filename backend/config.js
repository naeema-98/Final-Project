import dotenv from 'dotenv';

dotenv.config();

export default {
<<<<<<< HEAD
  PORT: process.env.PORT || 5004,
  MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost/project',
=======
  PORT: process.env.PORT || 5006,
  MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost:27017/project',
>>>>>>> 2369bcc020a97a3df11146f96d9730f2804cdbb0
  JWT_SECRET: process.env.JWT_SECRET || 'somethingsecret',
 // PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID || 'sb',
  accessKeyId: process.env.accessKeyId || 'accessKeyId',
  secretAccessKey: process.env.secretAccessKey || 'secretAccessKey',
};
