const express=require("express");
const mongoose=require("mongoose");
const routes=require("./routes/blog_router");
const app=express();
app.use(express.json);
app.use(express.urlencoded({extended:true}));
app.use("/api/routes",require("./routes/user"));

app.use("/api/blogs",routes);

app.get("/",(req,res)=>{
    res.json({message:"OKK"});
})

mongoose.connect("mongod://127.0.0.1:27017/test")
.then(()=>{
    console.log("mongoose connected");
})

app.listen(5565,()=>{
    console.log("SERVER STARTED");
})