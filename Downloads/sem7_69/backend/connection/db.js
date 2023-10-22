
const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/shoppingcart_db")
.then(()=>{
    console.log("connected successfully");
}).catch((Error)=>{
    console.error(Error);
})