import express from 'express'
import * as EventController from '../controllers/EventController.js'

const router=express.Router();

router.post('/create',EventController.CreateEvent)
router.get('/events',EventController.AllEvent)
router.post('/filtered',EventController.FilteredEvent)


export default router;