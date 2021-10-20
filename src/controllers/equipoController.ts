import { Equipos } from '../models/equipos';
import { Request, Response} from 'express';
 
 
export class EquiposController{
 
    public index(req:Request,res:Response){
            
        Equipos.findAll<Equipos>({})
 
        .then((users: Array<Equipos>) => res.json(users))  //[]
 
        .catch((err: Error) => res.status(500).json(err))
 
    }
 
}