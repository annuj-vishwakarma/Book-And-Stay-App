require("dotenv").config({path:'./.env'})
require("./Database/dbconnection").dbConnection();
const express = require("express")
const app = express();

app.listen(
    process.env.PORT,
    console.log(`server running on port ${process.env.PORT}`)
)