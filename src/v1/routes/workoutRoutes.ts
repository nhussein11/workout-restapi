import express from 'express';

const workoutController = require('../../controllers/workoutController')
const recordController = require('../../controllers/recordController')

const router = express.Router();

router
    .get('/', workoutController.getAllWorkouts)
    .get('/:workoutId', workoutController.getOneWorkout )
    .get('/:workoutId/records', recordController.getRecordForWorkout)
    .post('/', workoutController.createNewWorkout)
    .patch('/:workoutId&:workout',  workoutController.updateOneWorkout)
    .delete('/:workoutId', workoutController.deleteOneWorkout)

module.exports = router;