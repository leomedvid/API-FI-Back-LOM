import { getRepository } from "typeorm"
import { NextFunction, Request, Response } from "express"
import { SistemaLOM } from "../entity/SistemaLOM"
import { AppDataSource } from "../data-source"

export class SistemaLOMController {

    private SistemaLOMRepository = AppDataSource.getRepository(SistemaLOM)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.SistemaLOMRepository.find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
        
        return this.SistemaLOMRepository.findOneBy({ id: request.params.id })
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.SistemaLOMRepository.save(request.body)
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const produto = request.params           
        const user = await AppDataSource.getRepository(SistemaLOM).delete(produto)           
        if(user.affected ==1){               
            const userUpdated = await AppDataSource.getRepository(SistemaLOM).findOneBy(produto)               
            response.json(userUpdated)               
        }
    }  

}