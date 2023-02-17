/*
 o> now we want to use third party library in a require...
 o> npm -> node package manager. (central repo. whichever all the js library available there.).
 o> syntax -> npm install (package name Y library).
 o> express.js -> npm install express.

*/

const express= require('express');
const app = express();

const port = 4000;

//client
app.get('/hello',(req,res)=>{
    res.send('<h1>hello world</h1>');
})

//server side
app.listen(port , ()=>{
    console.log(`example app listing on ${port} `);
})