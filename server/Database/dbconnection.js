const mongoose = require("mongoose")

exports.dbConnection=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("database connected successfully");
     } catch (error) {
        console.log("error.message")
     }
};


