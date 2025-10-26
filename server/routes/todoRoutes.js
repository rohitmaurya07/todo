import Todo from "../models/todoModel.js"; // include .js if using ES modules
import jwt from "jsonwebtoken";

import { Router } from "express"
const router = Router()


const authMiddleware = (req, res, next) => {
    
      const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "No token" });

  try {
    const decoded = jwt.verify(token, "secret123");    
    req.user = decoded;
    next();
  } catch {
    return res.status(401).json({ message: "Invalid token" });
  }
};


// Getting All Todos
router.get("/",authMiddleware,async (req,res)=>{
    const todos = await Todo.find({ user: req.user.id });
    res.json(todos);
})  


// Add a new todo
router.post("/", authMiddleware, async (req, res) => {
  const todo = new Todo({ text: req.body.text, user: req.user.id });
  await todo.save();
  res.json(todo);
}); 


// Toggle Task
router.patch("/:id",authMiddleware,async (req,res)=>{
   const todo = await Todo.findOne({ _id: req.params.id, user: req.user.id });
if (!todo) return res.status(404).json({ message: "Todo not found" });
    todo.isCompleted = !todo.isCompleted
    todo.save()
  res.json({"success": true})
})


// Delete Task
router.delete("/:id",authMiddleware,async (req,res)=>{
    const todo = await Todo.findOne({ _id: req.params.id, user: req.user.id });
    if (!todo) return res.status(404).json({ message: "Todo not found" });
    await Todo.deleteOne({ _id: req.params.id });
  res.json({"success":true});
    
})

export default router
