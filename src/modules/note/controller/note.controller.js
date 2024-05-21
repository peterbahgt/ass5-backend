import noteModel from "../../../DB/models/note.model.js"
import userModel from "../../../DB/models/user.model.js"
//get all note 
export const getNote=async(req,res,next)=>{
    const notes=await noteModel.findAll({})
    return res.json({message:"done note",notes})
}
//add note 
export const addNote=async(req,res,next)=>{
    try {
        const {title,content,UserId}=req.body
    const note=await noteModel.create({title,content,UserId})
    return res.json({message:"done user",note})
    } catch (error) {
        if (error.original?.errno ==1452) {
            return res.json({message:"user Id not valid"})
        }
        return res.json({message:"error",error,errorMessage:error.message,stack:error.stack})
    }
}
//get all note with their oener 
export const getNoteAndOwner=async(req,res,next)=>{
    try {
        const note=await noteModel.findAll({
            include:{
                model:userModel,
                attributes:["name","email","age"]
            }
        })
        return res.json({message:"done ",note})
    } catch (error) {
        return res.json({message:"error accur",error})
    }
}
//update note
export const updateNote=async(req,res,next)=>{
    try {
        const{id}=req.params 
        const {title,content,UserId}=req.body
    const notes=await noteModel.update({title,content},{
        where:{
            id,
            UserId
        }
    })
    return notes[0]? res.json({message:"done",notes}):res.json({message:"invalid id ",notes})
    } catch (error) {
        return res.json({message:"error",error,errorMessage:error.message,stack:error.stack})
    }
}
//delete note 
export const deleteNote=async(req,res,next)=>{
    try {
        const{id}=req.params 
        const{UserId}=req.body
    const notes=await noteModel.destroy({
        where:{
            id,
            UserId
        }
    })
    return notes? res.json({message:"done ",notes}):res.json({message:"invalid id ",notes})
    } catch (error) {
        return res.json({message:"error",error,errorMessage:error.message,stack:error.stack})
    }
}