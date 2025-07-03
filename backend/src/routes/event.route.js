import express from 'express';
import { createEvent, getEvents, getSingleEvent } from '../controllers/event.controller.js';
import { protectRoute } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post("/", protectRoute, createEvent);
router.get("/", protectRoute, getEvents);
router.get('/:id', protectRoute, getSingleEvent);
export default router;