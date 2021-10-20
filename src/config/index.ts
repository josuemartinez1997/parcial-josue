import express, { Application } from 'express'
import morgan from 'morgan'
import { Routes } from '../routes/index';

export class App{
    app: Application;
    public routePrv:Routes = new Routes();
    equiposPrv: any;
    mantenimientoPrv: any;


    constructor(
        private port?: number|string
    ){
        this.app = express();
        this.settings();
        this.middelwares();
    }
 
    private settings(){
        this.app.set('port',this.port || process.env.PORT || 3000);
    }
 
    
    async listen(){
        await this.app.listen(this.app.get('port'));
        console.log("servidor esta en el puerto ",this.app.get('port'));
    }
 
    private middelwares(){
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false}));
 
    }

    private routes(){
        this.routePrv.userRoutes.routes(this.app);    
    }
    private equipos(){
        this.equiposPrv.equiposRoutes.routes(this.app);
    }
    private mantenimiento(){
        this.mantenimientoPrv.mantenimientoRoutes.routes(this.app);
    }


}
