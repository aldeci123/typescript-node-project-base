import express from 'express'
import { userRoutes } from './users.route'


//gerenciador de todas as rotas da API

export const router = (app: express.Express)=>{
    app.use(express.json()); //formato que a api irá usar na comunicação
    app.use(userRoutes);
}