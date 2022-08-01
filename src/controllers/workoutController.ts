import { Request, Response } from 'express';
import { WorkoutFromRequest } from '../database/models/Workout'

const workoutService = require('../services/workoutService')

const getAllWorkouts = (_req: Request, res: Response) => {
    const allWorkouts = workoutService.getAllWorkouts();
    res.status(200).send({ data: allWorkouts });
}

const getOneWorkout = (req: Request, res: Response) => {
    const { params: { workoutId } } = req;

    if (!workoutId) { return; }

    const workout = workoutService.getOneWorkout(workoutId);
    res.send(`Get workout ${JSON.stringify(workout)}`)
}

const createNewWorkout = (req: Request, res: Response) => {

    const { body } = req;
    if
        (
        !body.name ||
        !body.mode ||
        !body.equipment ||
        !body.exercises ||
        !body.trainerTips
    ) { return; }

    const newWorkout: WorkoutFromRequest = {
        name: body.name,
        mode: body.mode,
        equipment: body.equipment,
        exercises: body.exercises,
        trainerTips: body.trainerTips
    }

    const createdWorkout = workoutService.createdWorkout(newWorkout);
    res.status(201).send(`Created workout ${JSON.stringify(createdWorkout)}`)
}

const updateOneWorkout = (req: Request, res: Response) => {

    const { body, params: { workoutId } } = req;

    if (!workoutId) { return; }

    const updatedWorkout = workoutService.updatedWorkout(workoutId, body);
    res.send(`Update workout ${JSON.stringify(updatedWorkout)}`)
}

const deleteOneWorkout = (req: Request, res: Response) => {

    const {params:{workoutId}} = req;

    if(!workoutId){return;}
    
    workoutService.deleteOneWorkout(workoutId);
    res.send(`Delete workout `)
}


module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
}

