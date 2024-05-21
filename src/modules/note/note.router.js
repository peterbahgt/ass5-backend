import { Router } from "express";
import {addNote, deleteNote, getNote, getNoteAndOwner, updateNote} from "./controller/note.controller.js";
const router=Router()
//get all note 
router.get("/note",getNote)
//add note
router.post("/note",addNote)
//get note with owner
router.get("/note/owner",getNoteAndOwner)
//update
router.patch("/note/:id",updateNote)
//delete note
router.delete("/note/:id",deleteNote)
export default router