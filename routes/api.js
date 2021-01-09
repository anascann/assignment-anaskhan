const express=require('express');
const router=express.Router();

router.post('/api',(req,res)=>{
    var data= req.body.password;    
    console.log(data);

    if(data=== "1" || data === 1){
        res.status(200).json({result: 'Hello world'})
    }else{
        res.status(404).json({result : "wrong password"});
    }
})

module.exports=router;