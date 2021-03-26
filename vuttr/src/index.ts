import "reflect-metadata";
import { createConnection } from "typeorm";
import { Tool } from "./entity/Tool";
createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "gabilimajk12",
    database: "tahnamao_test",
    entities: [
        Tool
    ],
    synchronize: true,
    logging: false
}).then(connection => {
    // here you can start to work with your entities
}).catch(error => console.log(error));