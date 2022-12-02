import { getRepository } from "typeorm"
import { NextFunction, Request, Response } from "express"
import { User } from "../entity/User"
import { AppDataSource } from "../data-source"

export class UserController {

    private userRepository = AppDataSource.getRepository(User)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
        
        return this.userRepository.findOneBy({ id: request.params.id })
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.save(request.body)
    }
    async remove(request: Request, response: Response, next: NextFunction) {
        const produto = request.params           
        const user = await AppDataSource.getRepository(User).delete(produto)           
        if(user.affected ==1){               
            const userUpdated = await AppDataSource.getRepository(User).findOneBy(produto)               
            response.json(userUpdated)               
        }
    }                  
}
