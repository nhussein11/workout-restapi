import { Workout, WorkoutFromRequest } from "../database/models/Workout";

const WorkoutDB = require('../database/Workout')
const { v4: uuid } = require('uuid')

const getAllWorkouts = (): Workout[] => {
    const allWorkouts = WorkoutDB.getAllWorkouts();
    return allWorkouts;
}

const getOneWorkout = (workoutId: string): Workout | undefined => {
    const workout = WorkoutDB.getOneWorkout(workoutId);
    return workout;
}

const createNewWorkout = (newWorkout: WorkoutFromRequest) => {
    const timestamp: number = Date.now();

    const workOutToInsert: Workout = {
        ...newWorkout,
        id: uuid(),
        createdAt: new Date(timestamp),
        updatedAt: new Date(timestamp)
    }

    const createdWorout = WorkoutDB.createNewWorkout(workOutToInsert);
    return createdWorout;
}

const updateOneWorkout = (workoutId: string, changes: WorkoutFromRequest) => {
    const updatedWorkout = WorkoutDB.updateOneWorkout(workoutId,changes)
    return updatedWorkout;
}

const deleteOneWorkout = (workoutId: string) => {
    WorkoutDB.deleteOneWorkout(workoutId)
}


module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
}