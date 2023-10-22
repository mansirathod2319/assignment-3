
const express = require('express');
const router = express.Router();
const shpmodel = require('../models/shoppingCart');

router.get('/' , async(req,res)=>{
    const showData = await shpmodel.find();
    res.send(showData);
})

router.get('/create' , async(req,res)=>{
    res.render('create');
})

router.post('/create' ,  async(req,res)=>{
    const newUser= new shpmodel({
        productName:req.body.productName,
        productPrice:req.body.productPrice,
        productCategory:req.body.productCategory,
    })

    newUser.save().then(saved=>{
        res.send(saved);
    }).catch(error=>{
        console.error(error);
        res.send(error);
    })
})

router.get('/product/:id',async(req,res)=>{
    try{
        const productID=req.params.id;
        const getProduct=await shpmodel.findById(productID);

        if(getProduct){
            res.json(getProduct);
        }else{
            return res.status(404).send({ message: 'Student not found' });
        }
    }catch(error){
        res.status(500).send({ message: 'Internal server error' });
    }
})



router.put('/product/:id',async(req,res)=>{
    try{
        const productID=req.params.id;
        const name=req.body.productName;
        const price=req.body.productPrice;
        const desc=req.body.productCategory;

        const updatedProduct=await shpmodel.findByIdAndUpdate(productID,{name,price,desc},{new:true});
        if(updatedProduct){
            return res.json("Product Updated SuccessFully")
        }else{
            return res.status(404).send('No Data Found For Given Id')
        }
    }catch(error){
        console.error(error);
        res.status(500).send('Something went wrong')
    }
})

// router.get('/delete/:id' , async(req,res)=>{
//     const delStudent = await stdModel.findById(req.params.id);

//     if(delStudent)
//     {
//        res.render('delete' , {data:delStudent});
//     }
//     else
//     {
//        res.render('delete' , {error:"no data found"});
        
//     }
// })

router.post('/delete' , async(req,res)=>{
    
    const id = req.body.id;

    await shpmodel.findOneAndDelete({_id:id});

    // res.redirect('/');
})

// router.get('/edit/:id' , async(req,res)=>{
//     const delStudent = await stdModel.findById(req.params.id);

//     if(delStudent)
//     {
//        res.render('edit' , {data:delStudent});
//     }
//     else
//     {
//        res.render('edit' , {error:"no data found"});
        
//     }
// })

// router.post('/edit/:id' , async(req,res)=>{
//     const updateStudent = req.body;
//     const id = req.params.id;

//     await stdModel.findByIdAndUpdate({_id:id} , updateStudent);

//     res.redirect('/');

    
// })
module.exports=router;