import express from 'express';
import * as controller from '../controllers/noteController.js';
const router = express.Router();

router.get('/', controller.getNotesHandler);
router.post('/', controller.createNoteHandler);
export default router;
