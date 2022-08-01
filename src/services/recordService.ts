const Record = require("../database/Record");

const getRecordForWorkout = (workoutId: string) => {
    try {
        const record = Record.getRecordForWorkout(workoutId);
        return record;
    } catch (error) {
        throw error;
    }
};


module.exports = { getRecordForWorkout };