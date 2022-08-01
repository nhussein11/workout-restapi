import { Workout } from "./models/Workout";

const DB = require('./db.json');
const { saveToDataBase } = require('./utils')

const getAllWorkouts = (filterParams:any) => {
    try {
        let workouts = DB.workouts;
        if(filterParams.name){
            return DB.workouts.filter(
                (workout:Workout) => 
                workout.name.toLowerCase().includes(filterParams.name)
            )
        }
        if(filterParams.mode){
            return DB.workouts.filter(
                (workout:Workout) => 
                workout.mode.toLowerCase().includes(filterParams.mode)
            )
        }
        return workouts;
    } catch (error: any) {
        throw { status: 500, message: error }
    }
}

const getOneWorkout = (workoutId: string) => {
    try {
        const workout = DB.workouts.find((workout: Workout) => workout.id === workoutId);
        if (!workout) {
            throw {
                status: 400,
                message: `Can not find workout with the id: ${workoutId}`
            }
        }
        return workout;
    } catch (error: any) {
        throw { status: error?.status || 500, message: error?.message || error }
    }
}

const createNewWorkout = (newWorkout: Workout) => {

    try {
        const isAlreadyAdded =
            DB.workouts.findIndex((workout: Workout) => workout.name === newWorkout.name) > -1;

        if (isAlreadyAdded) {
            throw {
                status: '400',
                message: `Workout with the name ${newWorkout.name} already exists`
            };
        }

        DB.workouts.push(newWorkout);
        saveToDataBase(DB);
        return newWorkout;
    } catch (error: any) {
        throw { status: error?.status || 500, message: error?.message || error };
    }

}

const updateOneWorkout = (workoutId: string, changes: Workout) => {

    try {

        const isAlreadyAdded =
            DB.workouts.findIndex((workout: Workout) => workout.name === changes.name) > -1;
        if (isAlreadyAdded) {
            throw {
                status: 400,
                message: `Workout with the name '${changes.name}' already exists`,
            };
        }

        const indexForUpdate = DB.workouts.findIndex(
            (workout: Workout) => workout.id === workoutId
        );
        if (indexForUpdate === -1) {
            throw {
                status: 400,
                message: `Can't find workout with the id '${workoutId}'`,
            };
        }

        const timestamp = Date.now();

        const updatedWorkout = {
            ...DB.workouts[indexForUpdate],
            ...changes,
            updatedAt: new Date(timestamp)
        }

        DB.workouts[indexForUpdate] = updatedWorkout
        saveToDataBase(DB);
        return updatedWorkout;
    } catch (error: any) {
        throw { status: error?.status || 500, message: error?.message || error };
    }



}

const deleteOneWorkout = (workoutId: string) => {
    try{

        const indexForDeletion = DB.workouts.findIndex(
            (workout: Workout) => workout.id === workoutId
        );
    
        if (indexForDeletion === -1) { 
            throw{
                status:'400',
                message: `Can not find workout with the id: ${workoutId}`
            } 
        }
    
        DB.workouts.splice(indexForDeletion, 1);
        saveToDataBase(DB);
    }catch(error:any){
        throw { status: error?.status || 500, message: error?.message || error };
    }
    
}

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
}

export { };