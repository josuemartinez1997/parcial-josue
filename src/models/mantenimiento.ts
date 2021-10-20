import { database } from './../database/db';
import {Model , DataTypes} from 'sequelize';

export class Mantenimiento extends Model{
    public fecha!: Date;
    public descripcion!:string;
    public resultado!:string;
}
 
export interface MantenimientoI{
    fecha: Date;
    descripcion:string;
    resultado:string;
}

Mantenimiento.init(
    {
        fecha:{
            type: DataTypes.DATE,
            allowNull:false
        },
        descripcion:{
            type: DataTypes.STRING,
            allowNull:false
        },
        resultado:{
            type: DataTypes.STRING,
            allowNull:false
        },
      
    },
    {
        tableName:'mantenimiento',
        sequelize: database,
        timestamps: true
    }
);
