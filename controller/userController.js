const User=require("../model/user");

const getSingleUser=async(req, res)=>{
    return res.json({
        success:"true",
        message:"single User"
    })
}

module.exports={getSingleUser}