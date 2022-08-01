import { Request, Response } from 'express';
import { WorkoutFromRequest } from '../database/models/Workout'

const workoutService = require('../services/workoutService')

const getAllWorkouts = (_req: Request, res: Response) => {
    const {name,mode} = _req.query;
    try {
        const allWorkouts = workoutService.getAllWorkouts({name,mode});
        res.status(200).send({ status:'OK', data: allWorkouts });
    } catch (error: any) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } })
    }
}

const getOneWorkout = (req: Request, res: Response) => {
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
        const workout = workoutService.getOneWorkout(workoutId);
        res.send({status:'OK', data:`Workout:  ${JSON.stringify(workout)}`})
    } catch (error: any) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } })
    }
}

const createNewWorkout = (req: Request, res: Response) => {

    const { body } = req;
    if
        (
        !body.name ||
        !body.mode ||
        !body.equipment ||
        !body.exercises ||
        !body.trainerTips
    ) {
        res
            .status(400)
            .send({
                status: "FAILED",
                data: {
                    error: "One of the following keys is missing or is empty in request body: 'name', 'mode', 'equipment', 'exercises', 'trainerTips'",
                }
            })
        return;
    }

    const newWorkout: WorkoutFromRequest = {
        name: body.name,
        mode: body.mode,
        equipment: body.equipment,
        exercises: body.exercises,
        trainerTips: body.trainerTips
    }
    try {
        const createdWorkout = workoutService.createdWorkout(newWorkout);
        res.status(201).send({ status: 'OK', data: `Workout created successfully : ${JSON.stringify(createdWorkout)} ` })
    } catch (error: any) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } })
    }
}

const updateOneWorkout = (req: Request, res: Response) => {

    const { body, params: { workoutId } } = req;

    if (!workoutId) {
        res
            .status(400)
            .send({
                status: "FAILED",
                data: {
                    error: "Key missing: 'workoutId'",
                }
            })
        return;
    }
    try {
        const updatedWorkout = workoutService.updatedWorkout(workoutId, body);
        res.status(204).send({ status: 'OK', data: `Workout updated successfully: ${JSON.stringify(updatedWorkout)}` })
    } catch (error: any) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } })
    }
}

const deleteOneWorkout = (req: Request, res: Response) => {

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
        workoutService.deleteOneWorkout(workoutId);
        res.status(204).send({ status: "ok", data: `Workout deleted successfully` })
    } catch (error: any) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } })
    }
}


module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
}

