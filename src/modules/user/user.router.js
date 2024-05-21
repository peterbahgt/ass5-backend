import { Router } from "express";
import {getUser,
     signUp, 
    getOneUser, 
    updateUser,
    deleteUser,
    signIn,
    search,
    age,
    oldUser} from './controller/user.controller.js';
const router=Router()
//get all user
router.get("/user",getUser)
//sign up
router.post("/signUp",signUp)
//search by id 
router.get("/user/:id",getOneUser)
//update user 
router.patch("/user/:id",updateUser)
//delete user
router.delete("/user/:id",deleteUser)
//signin
router.post("/signIn",signIn)
//search name and age
router.get("/search",search)
//age between 20 and 30
router.get("/age",age)
//get oldest user
router.get("/old",oldUser)
export default router