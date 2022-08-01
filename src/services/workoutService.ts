import { Workout, WorkoutFromRequest } from "../database/models/Workout";

const WorkoutDB = require('../database/Workout')
const { v4: uuid } = require('uuid')

const getAllWorkouts = (): Workout[] => {
    try {
        const allWorkouts = WorkoutDB.getAllWorkouts();
        return allWorkouts;
    } catch (error: any) {
        throw error
    }
}

const getOneWorkout = (workoutId: string): Workout | undefined => {
    try{
        const workout = WorkoutDB.getOneWorkout(workoutId);
        return workout;
    }catch(error:any){
        throw error
    }
}

const createNewWorkout = (newWorkout: WorkoutFromRequest) => {
    const timestamp: number = Date.now();

    const workOutToInsert: Workout = {
        ...newWorkout,
        id: uuid(),
        createdAt: new Date(timestamp),
        updatedAt: new Date(timestamp)
    };

    try {
        const createdWorkout = WorkoutDB.createNewWorkout(workOutToInsert);
        return createdWorkout;
    } catch (error: any) {
        throw error;
    }
}


const updateOneWorkout = (workoutId: string, changes: WorkoutFromRequest) => {
    try{
        const updatedWorkout = WorkoutDB.updateOneWorkout(workoutId, changes)
        return updatedWorkout;
    }catch(error:any){
        throw error;
    }
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