import express from 'express';
const v1WorkoutRouter = require('./v1/routes/workoutRoutes')

const app = express()

app.use(express.json())

const PORT = process.env.PORT || 3000;

app.use( '/api/v1/workouts', v1WorkoutRouter)


app.listen(PORT, () => {
    console.log(`[Server] running on port ${PORT}`)
})