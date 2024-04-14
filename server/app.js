import express from "express";
import dotenv from "dotenv"
import cors from "cors";
import {dbconnection} from './Database/dbconnection'

const app = express();
app.listen(
    process.env.PORT,
    console.log(`server running on port ${process.env.PORT}`)
)