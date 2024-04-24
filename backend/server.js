import dotenv from 'dotenv';
import express from 'express';
import connectDB from './database.js';  
import getRoutes from './routes/get.js'; 
import jokeRoutes from './routes/jokes.js'; 
import arrRoutes from './routes/arr.js'; 

// Load environment variables from .env file
dotenv.config();

// Connect to the database
connectDB();

// Create Express app
const app = express();

// Middleware
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// Routes
app.use('/', getRoutes);
app.use('/api/jokes', jokeRoutes);
app.use('/arr', arrRoutes);

// Listen on the specified port
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
