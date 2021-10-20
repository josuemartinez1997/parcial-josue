import { Request, Response, Application } from 'express';
import { MantenimientoController } from '../controllers/mantenimiento';
 
export class MantenimientoRoutes{
 
    public mantenimientoRoutes:MantenimientoController = new MantenimientoController(); //constructor
    
    //metodo
    public routes(app: Application): void {
        app.route("/mantenimiento").get(this.mantenimientoRoutes.index);
    }
 
}
