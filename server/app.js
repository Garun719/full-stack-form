const express = require ('express')
const mongoose = require("mongoose");


const app = express();

//database
// Connection URL
const url = 'mongodb+srv://Full-Stack-Form:garun123@cluster0.lzskc0v.mongodb.net/usersDB?retryWrites=true&w=majority'; // Replace with your MongoDB URL and database name

// Establish the connection
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected successfully to the database');
    })
    .catch(error => {
        console.error('Error connecting to the database:', error);
    });


app.get('/', (req,res)=>{
    res.send("hello i am mongodb")
})




app.listen (3000,() =>{
    console.log("server is running port")
})