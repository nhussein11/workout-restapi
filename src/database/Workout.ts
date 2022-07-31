const DB = require('./db.json');

const getWorkouts = () => {
    return DB.workouts;
}

module.exports = {
    getWorkouts
}