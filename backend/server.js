import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import authRoutes from '../backend/routes/authRoutes.js'
// Load environment variables from .env file
dotenv.config();


// Create Express app
const app = express();

mongoose.connect(process.env.mongo)
.then(() => console.log("Database connected"))
.catch((err) => console.log("Database not connected", err))

//middleware
app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ limit: '5mb', extended: true }));

app.use(cookieParser())


// Routes
app.use('/', authRoutes);

// Listen on the specified port
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
