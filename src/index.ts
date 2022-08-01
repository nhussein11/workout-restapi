import express from 'express';
const apicache = require('apicache');
const v1WorkoutRouter = require('./v1/routes/workoutRoutes');

const {swaggerDocs: V1SwaggerDocs} = require('./v1/routes/swagger');

const app = express();
const cache = apicache.middleware;

app.use(express.json());

const PORT = process.env.PORT || 3000;
app.use(cache("2 minutes"));
app.use( '/api/v1/workouts', v1WorkoutRouter);


app.listen(PORT, () => {
    console.log(`[Server] running on port ${PORT}`)
    V1SwaggerDocs(app, PORT)
})