import mongoose from "mongoose";
import { Schema } from "mongoose";

const todoSchema = new Schema({
    user: {
     type: mongoose.Schema.Types.ObjectId,
     ref: "User",
     required: true
    },
    text: {
        type: String,
        required: true
    },
    isCompleted: {
            type: Boolean,
            default: false
            }

})


const Todo = mongoose.model("Todo",todoSchema)
export default Todo

