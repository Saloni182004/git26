const router=require("express").Router();

router.get("/getblog",(req,res)=>{
    res.json({
        success:true,
        message:"HIIIIIII"
    })
})

module.exports=router;