import express from 'express';
//import { request } from 'http';
import { controller } from './controller';
//import { pool } from './queries';
//import { User } from '../public/user';

const route = express.Router();

route.get('/user', controller.getAllUser);
route.get('/user/:id', controller.getUserById);
route.post('/users', controller.createUser);
route.put('/users/:id', controller.updateUser);
route.delete('/users/:id', controller.deleteUser);

export default route;
