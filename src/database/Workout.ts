const DB = require('./db.json');
const { saveToDataBase } = require('./utils')

const getAllWorkouts = () => {
    return DB.workouts;
}

const createNewWorkout = (newWorkout: any) => {
    const isAlreadyAdded =
        DB.workouts.findIndex((workout: any) => workout.name === newWorkout.name) > -1;
    
    if (isAlreadyAdded) {return;}

    DB.workouts.push(newWorkout);
    saveToDataBase(DB);
}

module.exports = {
    getAllWorkouts,
    createNewWorkout
}

export { };