import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import cors from "cors";
import foodRouter from './routers/food.router';
import userRouter from '../src/routers/user.router';
import { dbConnect } from '../src/config/database.config';
dbConnect();

const app = express();
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.use("/api/foods", foodRouter);
app.use("/api/users", userRouter);

const port = 5200;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})