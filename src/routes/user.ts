import { Request, Response, Application } from 'express';
import { UserController } from '../controllers/userController';
 
export class UserRoutes{
 
    public userController:UserController = new UserController(); //constructor
    
    //metodo
    public routes(app: Application): void {
        app.route("/users").get(this.userController.index);
    }
 
}
