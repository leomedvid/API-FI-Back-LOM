import { UserController } from "./controller/UserController"
import {SistemaLOMController} from "./controller/SistemaLOMController"

export const Routes = [{
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all"
}, {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one"
}, {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save"
}, {
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove"
},   
    {
    method: "get",
    route: "/sistemaLOM",
    controller: SistemaLOMController,
    action: "all"
}, {
    method: "get",
    route: "/sistemaLOM/:id",
    controller: SistemaLOMController,
    action: "one"
}, {
    method: "post",
    route: "/sistemaLOM",
    controller: SistemaLOMController,
    action: "save"
}, {
    method: "delete",
    route: "/sistemaLOM/:id",
    controller: SistemaLOMController,
    action: "remove"
}]
