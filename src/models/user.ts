import { database } from './../database/db';
import {Model , DataTypes} from 'sequelize';
export class User extends Model{
    public name!: string;
    public apellido!:string;
    public email!:string;
    public password!:string;
    public address!:string;
    public telefono!:string;
}
 
export interface UserI{
    name: string;
    apellido:string;
    email:string;
    password:string;
    address:string;
    telefono:string;
}
 
 
User.init(
    {
        name:{
            type: DataTypes.STRING,
            allowNull:false
        },
        apellido:{
            type: DataTypes.STRING,
            allowNull:false
        },
        email:{
            type: DataTypes.STRING,
            allowNull:false
        },
        password:{
            type: DataTypes.STRING,
            allowNull:false
        },
        address:{
            type: DataTypes.STRING,
            allowNull:true
        },
        telefono:{
            type: DataTypes.STRING,
            allowNull:true
        }
    },
    {
        tableName:'users',
        sequelize: database,
        timestamps: true
    }
);
