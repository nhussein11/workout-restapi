const Workout = require ('../database/Workout')
const {v4:uuid} = require('uuid')

const getAllWorkouts = () => {
    const allWorkouts = Workout.getAllWorkouts();
    return allWorkouts;
}
const getOneWorkout = () => {
    return;
}
const createNewWorkout = (newWorkout:any) => {
    const workOutToInsert = {
        ... newWorkout,
        id: uuid(),
        createdAt : new Date().toLocaleDateString('en-US',{timeZone:'UTC'}),
        updatedAt : new Date().toLocaleDateString('en-US',{timeZone:'UTC'})
    }

    const createdWorout = Workout.createNewWorkout(workOutToInsert);
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