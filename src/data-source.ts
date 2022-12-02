import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import {SistemaLOM} from "./entity/SistemaLOM"


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123456",
    database: "Faculdade",
    entities: [User, SistemaLOM],
    synchronize: true,
    logging:false
    
})