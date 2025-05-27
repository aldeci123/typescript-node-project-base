import express from "express";
import { UsersController } from "../controller/users.controller";

export const userRoutes = express.Router();

//O get exibe uma informação ou dado para o usuário.
userRoutes.get("/users", UsersController.getAll);
//o get id exibe uma informação ou dado com o id repassado pelo ususario
userRoutes.get("/users/:id", UsersController.getById);
//O post recebe um novo dado para ser inserido.
userRoutes.post("/users", UsersController.create);
//O put é usado para atualizar dados da api
userRoutes.put("/users/:id", UsersController.update);
//o delete exclui um dado, de acordo com o idetificador repassado
userRoutes.delete("/users/:id", UsersController.delete);

//o patch atualiza os dados de forma parcial, como neste api, pode-se atualizar apenas o nome, e não idade.
//sem implementação nesta API