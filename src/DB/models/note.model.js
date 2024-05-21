import { DataTypes } from "sequelize";
import { sequelize } from './../connection.js';
const noteModel =sequelize.define("notes",{
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    content:{
        type:DataTypes.STRING,
        allowNull:false
    }
})
export default noteModel