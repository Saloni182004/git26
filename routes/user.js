const router=require("express").Router();
const {getSingleUser}=require("../controller/userController");

router.get("/getuser",(req,res)=>{
    res.json({
        success:true,
        data:[{name:"Saloni"}]
    })
})

router.get("/getSingleUser",getSingleUser);


module.exports=router;