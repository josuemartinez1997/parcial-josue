import { database } from './../database/db';
import {Model , DataTypes} from 'sequelize';

export class Equipos extends Model{
    public marca!: string;
    public modelo!:string;
}
 
export interface EquiposI{
    marca: string;
    modelo: string;
}

Equipos.init(
    {
        marca:{
            type: DataTypes.STRING,
            allowNull:false
        },
        modelo:{
            type: DataTypes.STRING,
            allowNull:false
        },
      
    },
    {
        tableName:'equipos',
        sequelize: database,
        timestamps: true
    }
);
