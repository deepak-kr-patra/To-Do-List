import express from 'express';
import protectRoute from '../middleware/protectRoute.js';
import { addTask, getTasks, removeTask, updateTask } from '../controllers/task.controller.js';


const router = express.Router();

router.get('/', protectRoute, getTasks);
router.post('/add', protectRoute, addTask);
router.delete('/remove/:id', protectRoute, removeTask);
router.put('/update/:id', protectRoute, updateTask);

export default router;