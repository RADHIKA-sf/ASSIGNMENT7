
import {Request,response,Response} from  'express';
import fs from 'fs/promises';
import {User} from '../public/user';
import { pool } from './queries';
class Controller{
    public async getAllUser(req:Request, res:Response) {
        pool.query('SELECT * FROM demo ORDER BY id ASC', (error, results) => {
            if (error) {
              throw error
            }
            response.status(200).json(results.rows)
        })}
    
    
    public async getUserById(req: Request, res: Response) {
        const id = Number(req.params.id);
        pool.query('SELECT * FROM demo WHERE id = $1',[id], (error,result) =>
        {
            if(error)
            {
                throw error
            }
            else
            {
                response.status(200).json(result.rows);
            }
        }
        );
    } 
    
    public async createUser(req: Request, res: Response) {
        const {id,firstName,middleName,lastName,email,phone,role,address} = req.body;
        pool.query('INSERT INTO demo(id,firstname,middlename,lastname,email,phone,role,address) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)',
        [id,firstName,middleName,lastName,email,phone,role,address],(error,result)=>
        {
            if(error)
            {
                throw error
            }
            else
            {
                response.status(201).send("User added successfully");
            }
        }
        ); 
         
    }
    
    public async updateUser(req: Request, res: Response) {

        const id = Number(req.params.id);
        const {firstName,middleName,lastName,email,phone,role,address} = req.body;
        pool.query('UPDATE my_users SET firstname = $2, middlename = $3, lastname = $4, email = $5, phone = $6, role = $7, address = $8 WHERE id = $1',
        [id,firstName,middleName,lastName,email,phone,role,address],(error,result) =>
        {
            if(error)
            {
                res.status(400).send("Failed");
                throw error;
            }
            else{
                res.status(200).send("Updated");
            }
        }
        );
    }
    
    public async deleteUser(req: Request, res: Response) {
       
            const id = Number(req.params.id);
            pool.query('DELETE FROM my_users WHERE id = $1',[id],(error,result)=>
            {
                if(error)
                {   res.status(400).send("Delete Operation Failed");
                    throw error;
                }
                else
                {
                    res.status(200).send("Deleted Successfully");
                }
            });
         
        }
      
    }   

export const controller = new Controller;
