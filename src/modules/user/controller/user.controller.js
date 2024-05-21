
import userModel from './../../../DB/models/user.model.js';
import { Op } from 'sequelize';
//get all user
export const getUser=async(req,res,next)=>{
    const users=await userModel.findAll({})
    return res.json({message:"done user",users})
}
//sign up 
export const signUp=async(req,res,next)=>{
    try {
        const {name,email,password}=req.body
    const users=await userModel.create({name,email,password})
    return res.json({message:"done user",users})
    } catch (error) {
        if (error.original?.errno ==1062) {
            return res.json({message:"email already exist"})
        }
        return res.json({message:"error",error,errorMessage:error.message,stack:error.stack})
    }
}
//search by id
export const getOneUser=async(req,res,next)=>{
   try {
    const{id}=req.params
    const users=await userModel.findOne({
        where:{
            id
        }
    })
    return res.json({message:"done",users})
   } catch (error) {
    console.log(error)
   }
}
//update user
export const updateUser=async(req,res,next)=>{
    try {
        const{id}=req.params 
        const {name,age}=req.body
    const users=await userModel.update({name,age},{
        where:{
            id
        }
    })
    return users[0]? res.json({message:"done user",users}):res.json({message:"invalid id ",users})
    } catch (error) {
        return res.json({message:"error",error,errorMessage:error.message,stack:error.stack})
    }
}
//delete user
export const deleteUser=async(req,res,next)=>{
    try {
        const{id}=req.params 
    const users=await userModel.destroy({
        where:{
            id
        }
    })
    return users? res.json({message:"done user",users}):res.json({message:"invalid id ",users})
    } catch (error) {
        return res.json({message:"error",error,errorMessage:error.message,stack:error.stack})
    }
}
//signIN
export const signIn = async (req, res, next) => {
  try {
    const {  email, password } = req.body;
    const user = await userModel.findAll({
        where:{
            email,
            password
        }
    })
    if (user.length === 0) {
        return res.json({ message: "Invalid email or password." });
      }
    return res.json({ message: "Login successful.", user}); 
  } catch (error) {
    if (error) {
        return res.json({ message: "An error occurred.", error });
      }
    };
  };
// search user start name with a and age is less than 30 
export const search = async (req, res, next) => {
  try {
    const { name, age } = req.body; 
    const users = await userModel.findAll({
      where: {
        name: {
          [Op.like]: `a%${name}%`,
        },
        age: {
          [Op.lt]: age,
        },
      },
    });
    return res.json({ message: "Users retrieved successfully.", users });
  } catch (error) {
    return res.json({message: "Error occurred.",error: error.message,stack: error.stack,});
  }
};
//age betwwen 20and 30
export const age = async (req, res, next) => {
  try {
    const { age } = req.body;
    const users = await userModel.findAll({
      where: {
        age: {
          [Op.between]: [age.min, age.max], 
        },
      },
    });
    return res.json({ message: "Users retrieved successfully.", users });
  } catch (error) {
    return res.json({message: "Error occurred.", error: error.message, stack: error.stack, });
  }
};
//get 3 oldest user 
export const oldUser = async (req, res, next) => {
  try {
    const users = await userModel.findAll({
      order: [['age', 'DESC']],
      limit: 3,
    });

    return res.json({ message: "Users retrieved successfully.", users });
  } catch (error) {
    return res.json({
      message: "Error occurred.",
      error: error.message,
      stack: error.stack,
    });
  }
};

