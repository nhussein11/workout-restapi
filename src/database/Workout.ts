import { Workout } from "./models/Workout";

const DB = require('./db.json');
const { saveToDataBase } = require('./utils')

const getAllWorkouts = () => {
    return DB.workouts;
}

const getOneWorkout = (workoutId: string) => {
    const workout = DB.workouts.find((workout: Workout) => workout.id === workoutId);
    if (!workout) { return; }
    return workout;
}

const createNewWorkout = (newWorkout: Workout) => {
    const isAlreadyAdded =
        DB.workouts.findIndex((workout: Workout) => workout.name === newWorkout.name) > -1;

    if (isAlreadyAdded) { return; }

    DB.workouts.push(newWorkout);
    saveToDataBase(DB);
}

const updateOneWorkout = (workoutId: string, changes: Workout) => {
    const timestamp = Date.now();

    const indexForUpdate = DB.workouts.findIndex(
        (workout: Workout) => workout.id === workoutId
    );
    if (indexForUpdate === -1) { return; }

    const updatedWorkout = {
        ...DB.workouts[indexForUpdate],
        ...changes,
        updatedAt: new Date(timestamp)
    }

    DB.workouts[indexForUpdate] = updatedWorkout
    saveToDataBase(DB);
    return updatedWorkout;
}

const deleteOneWorkout = (workoutId: string) => {
    const indexForDeletion = DB.workouts.findIndex(
        (workout: Workout) => workout.id === workoutId
    );

    if(indexForDeletion === -1) {return;}

    DB.workouts.splice(indexForDeletion,1);
    saveToDataBase(DB);
}

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
}

export { };