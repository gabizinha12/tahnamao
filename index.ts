import "reflect-metadata";
import { createConnection } from "typeorm";
import { Request, Response } from "express";
import { AppRoutes } from "./routes";
import * as express from "express";
import { Tool } from "./vuttr/src/entity/Tool";
createConnection({
    type: "mysql",
    host: "test",
    port: 3306,
    username: "root",
    password: "gabilimajk12",
    database: "tahnamao_test",
    entities: [
        Tool
    ],
    synchronize: false,
    logging: false
}).then(async connection => {

    // create express app
    const app = express.default();

    app.use(express.json());

    AppRoutes.forEach(route => {
        app[route.method](route.path, (request: Request, response: Response, next: Function) => {
            route.action(request, response)
                .then(() => next)
                .catch(err => next(err));
        });
    });

    // run app
    app.listen(3000 || process.env.port);

    console.log("Express application is up and running on port 3000");

}).catch(error => console.log("TypeORM connection error: ", error));