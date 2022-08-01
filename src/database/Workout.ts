import { Workout } from "./models/Workout";

const DB = require('./db.json');
const { saveToDataBase } = require('./utils')

const getAllWorkouts = () => {
    return DB.workouts;
}

const createNewWorkout = (newWorkout: Workout) => {
    const isAlreadyAdded =
        DB.workouts.findIndex((workout: Workout) => workout.name === newWorkout.name) > -1;
    
    if (isAlreadyAdded) {return;}

    DB.workouts.push(newWorkout);
    saveToDataBase(DB);
}

module.exports = {
    getAllWorkouts,
    createNewWorkout
}

export { };