import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.route.js';
import infoRoutes from './routes/info.route.js';
import taskRoutes from './routes/task.route.js';
import connectToMongoDB from './db/connectToMongoDB.js';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/info', infoRoutes);
app.use('/api/tasks', taskRoutes);

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`To-Do List server listening on port ${PORT}`);
});