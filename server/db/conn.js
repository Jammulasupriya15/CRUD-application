const mongoose = require("mongoose");

const DB = "mongodb+srv://supriya:supriya15@cluster0.ezplnnw.mongodb.net/mernstack?retryWrites=true&w=majority"

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("connection start")).catch((error)=> console.log(error.message));