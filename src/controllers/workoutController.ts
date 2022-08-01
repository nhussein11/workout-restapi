import { Request, Response } from 'express';
import { WorkoutFromRequest } from '../database/models/Workout'

const workoutService = require('../services/workoutService')

const getAllWorkouts = (_req: Request, res: Response) => {
    const allWorkouts = workoutService.getAllWorkouts();
    res.status(200).send({data: allWorkouts});
}

const getOneWorkout = (req: Request, res: Response) => {
    const workout = workoutService.getOneWorkout(req.params.workoutId);
    res.send(`Get workout ${JSON.stringify(workout)}`)
}

const createNewWorkout = (req: Request, res: Response) => {
    
    const body = isWorkoutFromRequestValid(req);

    if(!body){return;}

    const newWorkout : WorkoutFromRequest  = {
        name : body.name,
        mode : body.mode,
        equipment : body.equipment,
        exercises : body.exercises,
        trainerTips: body.trainerTips
    }
    
    const createdWorkout = workoutService.createdWorkout(newWorkout);
    res.status(201).send(`Created workout ${createdWorkout}`)
}

const updateOneWorkout = (req: Request, res: Response) => {
    const body = isWorkoutFromRequestValid(req);
    
    if(!body){return;}
    
    const updatedWorkout = workoutService.updatedWorkout(req.params.workoutId, body);
    res.send(`Update workout ${JSON.stringify(updatedWorkout)}`)
}

const deleteOneWorkout = (req: Request, res: Response) => {
    workoutService.deleteOneWorkout(req.params.workoutId);
    res.send(`Delete workout ${req.params.workoutId}`)
}


module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
}


const isWorkoutFromRequestValid = (req: Request) =>{
    const {body} = req;
    if
    (
        !body.name ||
        !body.mode ||
        !body.equipment ||
        !body.exercises ||
        !body.trainerTips
    ){return;}
    return body;
}