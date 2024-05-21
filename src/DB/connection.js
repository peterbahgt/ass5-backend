import { Sequelize } from "sequelize";
export const sequelize=new Sequelize("assign5","root","",{
    host:"localhost",
    dialect:"mysql"
})
export const connection = async()=>{
    return await sequelize.sync().then(()=>{
        console.log("DB connected")
    }).catch(error=>{
console.log("fail connected")
console.log("fail")
    })
}