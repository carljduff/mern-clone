import express from 'express';
import { addItem, getItems, getMyItems, deleteItem } from '../controllers/item.controller.js';
import { protectRoute } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post('/', protectRoute, addItem);
router.get('/', protectRoute, getItems);
router.get('/myitems', protectRoute, getMyItems);
router.delete('/:itemID', protectRoute, deleteItem);
router.put('/', protectRoute, updateItem);
export default router;