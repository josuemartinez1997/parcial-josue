import { Mantenimiento } from '../models/mantenimiento';
import { Request, Response} from 'express';
 
 
export class MantenimientoController{
 
    public index(req:Request,res:Response){
            
        Mantenimiento.findAll<Mantenimiento>({})
 
        .then((users: Array<Mantenimiento>) => res.json(users))  
 
        .catch((err: Error) => res.status(500).json(err))
 
    }
 
}