import express from 'express';

const workoutController = require('../../controllers/workoutController')

const router = express.Router();


router
    .get('/', workoutController.getAllWorkouts)
    .get('/:workoutId', workoutController.getOneWorkout )
    .post('/:workoutId', workoutController.createNewWorkout)
    .patch('/:workoutId',  workoutController.updateOneWorkout)
    .delete('/:workoutId', workoutController.deleteOneWorkout)

