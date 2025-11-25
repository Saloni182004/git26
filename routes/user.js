const router=require("express").Router();

router.get("/getuser",(req,res)=>{
    res.json({
        success:true,
        data:[{name:"Saloni"}]
    })
})

module.exports=router;