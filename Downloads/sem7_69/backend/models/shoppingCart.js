
const mongoose = require ('mongoose');


const shoppingCartSchema = new mongoose.Schema({
    productName:{
        type:String,
        required:true,
    } , 

    productPrice:{
        type:Number,
        required:true,
    },

    productCategory:{
        type:String,
        required:true,
    },


})

module.exports = new mongoose.model('shoppingCart' , shoppingCartSchema);