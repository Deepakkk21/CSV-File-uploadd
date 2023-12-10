const mongoose = require("mongoose");



// const DB = 'mongodb://127.0.0.1:27017';
const DB ='mongodb+srv://dk135781:jUkxi6Lb8UHUymE7@cluster2.l4j9ltn.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(DB).then(()=>{
    console.log('Connection successful!');
}).catch((err) => console.log("no connection " + err));

//setting it to db
const db = mongoose.connection;

/** ------------------ CHECKING CONNECTION ------------------ **/
//if error occurs
db.on("error", console.error.bind(console, "Error connecting to DB"));
// when db connects successfully
db.once("open", function(){
    console.log("Successfully connected to DB");
});

/** ------------------ EXPORTING DB ------------------ **/
module.exports = db;