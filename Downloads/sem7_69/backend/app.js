
const express = require('express');
const app = express();
const cors=require('cors');
const rout = require('./routes/shoppingCartRout');

require('./connection/db');

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200'); // Replace with the actual origin of your frontend
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

app.use('/' , rout);
app.use(cors);

app.listen(3000 , ()=>{
    console.log("app is running on port 3000");
})