import express from 'express';

const workoutController = require('../../controllers/workoutController')

const router = express.Router();

router
    .get('/', workoutController.getAllWorkouts)
    .get('/:workoutId', workoutController.getOneWorkout )
    .post('/', workoutController.createNewWorkout)
    .patch('/:workoutId&:workout',  workoutController.updateOneWorkout)
    .delete('/:workoutId', workoutController.deleteOneWorkout)

module.exports = router;