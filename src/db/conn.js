const mongoose = require("mongoose");

//creating db
mongoose.connect("mongodb+srv://batch42:batch42@batch42.cm4zxfe.mongodb.net/zomDB?retryWrites=true&w=majority", {
   }).then(() => {
    console.log("connection successfull");
}).catch((error) => {
    console.log(error);
})