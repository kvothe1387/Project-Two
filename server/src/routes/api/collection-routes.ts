import { Router } from "express";
import { getCollection, addCollection, removeFromCollection } from "../../controllers/collectionController.js";

const router = Router();

// GET /api/collection - Get all LEGO sets in the user's collection
router.get('/:userId', getCollection);

// POST /api/collection - Add a LEGO set to the user's collection
router.post('/', addCollection);

// DELETE /api/collection - Remove a LEGO set from the user's collection
router.delete('/', removeFromCollection);

export { router as collectionRouter };