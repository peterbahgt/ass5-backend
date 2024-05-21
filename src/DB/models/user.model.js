import { DataTypes } from "sequelize";
import { sequelize } from './../connection.js';
import noteModel from "./note.model.js";
const userModel =sequelize.define("User",{
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    age:{
        type:DataTypes.INTEGER
    }
})
userModel.hasMany(noteModel,{
    onDelete:"CASCADE",
    onUpdate:"CASCADE"
})
noteModel.belongsTo(userModel,{
    onDelete:"CASCADE",
    onUpdate:"CASCADE"
})
export default userModel