const Workout = require ('../database/Workout')

const getAllWorkouts = () => {
    const allWorkouts = Workout.getWorkouts();
    return allWorkouts;
}
const getOneWorkout = () => {
    return;
}
const createNewWorkout = () => {
    return;
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