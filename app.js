import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(cors({
  origin: '*'
}));


import { db } from './lib/database.js';

// TODO: Environment based configs
const config = {
  url: process.env.MONGO_URL,
  database: 'process.env.DB',
  minPoolSize: 3,
  maxPoolSize: 10,
};

db.init(config);
    
// Middleware here
// Routes here

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;