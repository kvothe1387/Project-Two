import { Router } from 'express';
import { userRouter } from './user-routes.js';
import { collectionRouter } from './collection-routes.js';


const router = Router();

// Routes for user-related operations
router.use('/users', userRouter);

// Routes for collection-related operations
router.use('/collections', collectionRouter);

export default router;
