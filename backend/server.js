import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.route.js';
import taskRoutes from './routes/task.route.js';
import connectToMongoDB from './db/connectToMongoDB.js';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

app.use('/auth', authRoutes);
app.use('/tasks', taskRoutes);

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`To-Do List server listening on port ${PORT}`);
});