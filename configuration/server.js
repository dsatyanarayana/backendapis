//Express JS
const express = require("express");
const app = express();
app.use(express.json());    
let serverPort = process.env.PORT || 3000;

//Environment Variables
const dotenv = require("dotenv");
dotenv.config();

app.listen(serverPort,()=>{
    console.log("Server Connected with PORT "+serverPort);
}).on('error',(e)=>{
    console.log("Server Connected Failed "+e.message);
});
