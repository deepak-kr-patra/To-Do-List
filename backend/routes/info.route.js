import express from 'express'
import protectRoute from '../middleware/protectRoute.js';
import { changePassword, changeUsername } from '../controllers/info.controller.js';


const router = express.Router();

router.put('/change-username', protectRoute, changeUsername);
router.put('/change-password', protectRoute, changePassword);

export default router;