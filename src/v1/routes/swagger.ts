import { Request, Response } from "express";

const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");


const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Workout REST API",
            version: "1.0.0",
            description: "Small rest api example, using typescript, express and nodejs.",
            contact: "https://github.com/nhussein11"
        },
    },
    apis: ['./src/v1/routes/workoutRoutes.ts', "./src/database/Workout.ts"],
};


const swaggerSpec = swaggerJSDoc(options);


const swaggerDocs = (app: any, port: any) => {

    app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

    app.get("/api/v1/docs.json", (_req: Request, res: Response) => {
        res.setHeader("Content-Type", "application/json");
        res.send(swaggerSpec);
    });
    console.log(
        `Version 1 Docs are available on http://localhost:${port}/api/v1/docs`
    );
};

module.exports = { swaggerDocs };