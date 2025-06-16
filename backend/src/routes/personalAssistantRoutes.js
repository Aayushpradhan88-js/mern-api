import express from 'express';

import { personalAssistantController } from '../controllers/aiController.js';

const router = express.Router()

router.get('/personal-assistant-chat', personalAssistantController);

export {router}