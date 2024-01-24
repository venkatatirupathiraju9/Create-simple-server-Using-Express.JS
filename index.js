var express = require ("express");
var app = express();
app.get("/user",(req,res)=>{
    res.send("This is Express get method")
    res.end()
});
app.post("/user1", (req,res)=>{
    res.send("This is Express post method")
    res.end()
});
app.listen(5003, ()=>{
    console.log("server starts");
});