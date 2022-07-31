import { Request, Response } from 'express';

const getAllWorkouts = (_req: Request, res: Response) => {
    res.send(`Get all workouts`)
}

const getOneWorkout = (req: Request, res: Response) => {
    res.send(`Get workout ${req.params.workoutId}`)
}

const createNewWorkout = (req: Request, res: Response) => {
    res.send(`Create workout ${req.params.workoutId}`)
}

const updateOneWorkout = (req: Request, res: Response) => {
    res.send(`Update workout ${req.params.workoutId}`)
}

const deleteOneWorkout = (req: Request, res: Response) => {
    res.send(`Delete workout ${req.params.workoutId}`)
}

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
}
