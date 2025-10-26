import {Router} from "express"
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const router = Router()



// Register
router.post('/register',async (req,res)=>{
    
    const {username , password} = req.body;
    console.log("ndjbd");
    
    // Logic to check already registered User
    const findUser =  await User.findOne({username})
    if (findUser) {
        return res.status(400).json({ message: "User already registered" });
    }
    // Registering User
    const hashed = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashed });
  await user.save();
  res.json({ message: "User registered successfully" });

})

// Login
router.post('/login',async (req,res)=>{
    const {username , password} = req.body;

    const findUser =  await User.findOne({username})
    if (!findUser) {
        return res.json({message: "Please Register"})
    }
    const isMatch = await bcrypt.compare(password,findUser.password)
    if (!isMatch) return res.status(400).json({ message: "Invalid password" });

    const token = jwt.sign({id: findUser._id}, "secret123",{expiresIn: "1h"})
    res.json({token,success: true})
    
})

export default router