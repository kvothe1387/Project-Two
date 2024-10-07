import express from 'express';
import { searchSetByNumber, searchSetByName } from '../../controllers/rebrickableController.js';

const router = express.Router();

// GET /api/search/number/:setId - Search by set number
router.get('/search/number/:setId', async (req, res) => {
  const { setId } = req.params;
  try {
    const result = await searchSetByNumber(setId);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
});

// GET /api/search/name/:setName - Search by set name
router.get('/search/name/:setName', async (req, res) => {
  const { setName } = req.params;
  try {
    const result = await searchSetByName(setName);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
});

export default router;
