import { Workout, WorkoutFromRequest } from "../database/models/Workout";

const  WorkoutDB = require('../database/Workout')
const { v4: uuid } = require('uuid')

const getAllWorkouts = () => {
    const allWorkouts = WorkoutDB.getAllWorkouts();
    return allWorkouts;
}

const getOneWorkout = (id:string) : Workout | undefined => {
    const allWorkouts = WorkoutDB.getAllWorkouts();
    const workout = allWorkouts.find((workout : Workout) => workout.id === id)
    return (workout)
    ? workout
    : undefined
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

const updateOneWorkout = () => {
    return;
}
const deleteOneWorkout = () => {
    return;
}


module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
}