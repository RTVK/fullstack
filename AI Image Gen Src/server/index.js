import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';

dotenv.config(); // load env 

const app = express(); //express application
app.use(cors()); // middleware 
app.use(express.json({ limit: '50mb' })); // middleware to accept file upto 50 mb

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);

app.get('/', async (req, res) => {
  res.status(200).json({
    message: 'Hello from DALL.E!',
  });
});

const startServer = async () => {
    // running the server 
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(8080, () => console.log('Server started on port 8080')); // on port 8080
  } catch (error) {
    console.log(error);
  }
};

startServer(); // calling start server 