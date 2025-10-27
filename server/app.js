import express from "express"
import mongoose from "mongoose"
import 'dotenv/config'
import cors from 'cors';
import todoRoute from "./routes/todoRoutes.js";
import authRoute from "./routes/authRoutes.js";
const app = express()
app.use(cors())
app.use(express.json())
const port = 3000


async function main() {
     await mongoose.connect(process.env.MONGO_URI)
     console.log("Connection Success");
     
}

main()

app.use('/api/todos', todoRoute);
app.use('/auth', authRoute);

app.get("/",(req,res)=>{
    res.send("Hello ji")
})




// Starting Backend
// app.listen(port,()=>{
//         console.log(`App is listening on ${port}`)
// })