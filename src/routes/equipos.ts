import { Request, Response, Application } from 'express';
import { EquiposController } from '../controllers/equipoController';
 
export class EquiposRoutes{
 
    public equiposRoutes:EquiposController = new EquiposController(); //constructor
    
    //metodo
    public routes(app: Application): void {
        app.route("/equipos").get(this.equiposRoutes.index);
    }
 
}
