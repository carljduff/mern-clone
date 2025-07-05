import express from 'express';
import { addCategory, getCategories } from '../controllers/category.controller.js';
import { protectRoute } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post('/', protectRoute, addCategory);
router.get('/', protectRoute, getCategories);
export default router;