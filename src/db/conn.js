const mongoose = require("mongoose");

//creating db
mongoose.connect("mongodb://localhost:27017/My_site", {
   }).then(() => {
    console.log("connection successfull");
}).catch((error) => {
    console.log(error);
})