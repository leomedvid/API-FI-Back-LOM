import * as express from "express"
import * as bodyParser from "body-parser"
import * as cors from 'cors';
import { Request, Response } from "express"
import { AppDataSource } from "./data-source"
import { Routes } from "./routes"
import { User } from "./entity/User"
import {SistemaLOM} from "./entity/SistemaLOM"

AppDataSource.initialize().then(async () => {

    // create express app
    const app = express()
    const cors=require('cors');

    app.use(bodyParser.json())
    app.use(cors());

    // register express routes from defined application routes
    Routes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next)
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined)

            } else if (result !== null && result !== undefined) {
                res.json(result)
            }
        })
    })

    // start express server
    app.listen(3000)

    // insert new users for test
    await AppDataSource.manager.save(
        AppDataSource.manager.create(User, {
            nome: "Nathan Manuel Anderson da Mata",
            cpf: "107.626.041-15",
            cep: "88371-575",
            telefone: "(49) 98687-5239",
        })
    )

    await AppDataSource.manager.save(
        AppDataSource.manager.create(User, {
            nome: "Rebeca Francisca Teixeira",
            cpf: "524.768.955-04",
            cep: "64028-625",
            telefone: "(86) 99544-4704" 
        })
    )
    await AppDataSource.manager.save(
        AppDataSource.manager.create(SistemaLOM, {
            nome: "Cadeira",
            cor: "Rosa",
            quantidade: 4,
            preco: "50,00"
        })
    )
    await AppDataSource.manager.save(
        AppDataSource.manager.create(SistemaLOM, {
            nome: "Armario",
            cor: "Marrom",
            quantidade: 4,
            preco: "150,00"
        })
    )


    console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results")
    console.log("Express server has started on port 3000. Open http://localhost:3000/SistemaLOM to see results")

}).catch(error => console.log(error))
