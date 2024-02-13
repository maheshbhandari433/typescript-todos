import express, { Request, Response, NextFunction } from 'express';
import todoRoutes from './routes/todo';
import { json } from 'body-parser';
import mongoose from 'mongoose';

const app = express();

// Connect to MongoDB database

 mongoose.connect('mongodb+srv://mahesh:mongoPass1@clusterevent.wnhdxou.mongodb.net/?retryWrites=true&w=majority')
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB Atlas:', error);
  }); 

// Handle connection events
mongoose.connection.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

app.use(json()); // This is the middleware for parsing the body of the request

const port = 3005;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.use('/todos', todoRoutes); // This is the route for the todoRoutes

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
}); // This is the error handling middleware



