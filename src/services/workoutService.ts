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

const updateOneWorkout = (id:string, newWorkout: WorkoutFromRequest) => {
    const timestamp: number = Date.now();  
    const allWorkouts = WorkoutDB.getAllWorkouts();
    const workoutIndex = allWorkouts.findIndex((workout : Workout) => workout.id === id)
    
    const workoutToUpdate : Workout = {
        ... newWorkout,
        id: allWorkouts[workoutIndex].id,
        createdAt: new Date(timestamp),
        updatedAt: new Date(timestamp)
    }

    allWorkouts[workoutIndex] = workoutToUpdate;
    return newWorkout;
}

const deleteOneWorkout = (id:string) => {
    
    return;
}


module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
}