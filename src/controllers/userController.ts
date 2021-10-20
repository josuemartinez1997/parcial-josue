import { User } from './../models/user';
import { Request, Response} from 'express';
 
 
export class UserController{
 
    public index(req:Request,res:Response){
            
        User.findAll<User>({})
 
        .then((users: Array<User>) => res.json(users))  //[]
 
        .catch((err: Error) => res.status(500).json(err))
 
    }
 
}
