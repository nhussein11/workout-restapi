import { Request, Response } from 'express';

const recordService = require('../services/recordService')

const getRecordForWorkout = (req:Request,res:Response)=>{
    const { params: { workoutId } } = req;

    if (!workoutId) {
        res
            .status(400)
            .send({
                status: "FAILED",
                data: {
                    error: "Parameter: ':workoutId' can not be empty",
                }
            })
        return;
    }
    try {
        const workout = recordService.getRecordForWorkout(workoutId);
        res.send({status:'OK', data:`Workout:  ${JSON.stringify(workout)}`})
    } catch (error: any) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } })
    }
}

module.exports = {
    getRecordForWorkout
}