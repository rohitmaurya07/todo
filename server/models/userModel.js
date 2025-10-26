import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
        username: {
            type: String,
            required: true,
            unique: true
        },
        password:{
            type: String,
            required: true
        }
})

const User = mongoose.model("Tuser",userSchema)
export default User