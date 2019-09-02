const express=require("express");
const app=express();
app.get("/posts",(req,res)=>{
    res.send(
        {
            name:"Saifullah Razzaq",
            id:12234
        })
})

app.get("/users",(req,res)=>{
    res.send(
        {
            name:"Razzaq Ahmed",
            id:12556
        }
    )


})


app.get("/myusers",(req,res)=>{
    res.send(
        {
            name:"Masood",
            id:345678
        }
    )


})
app.get("/data",(req,res)=>{
    res.send(
        {
            name:"Rehan",
            id:09989
        }
    )


})
app.get("/mydata",(req,res)=>{
    res.send(
        {
            name:"kuttub",
            id:90008
        
        }
    )


})
app.get("/myposts",(req,res)=>{
    res.send(
        {
            name:"Ahmed",
            id:09880
        }
    )


})
app.get("/node",(req,res)=>{
    res.send(
        {
            name:"Razzaq",
            id:09778
        }
    )
})






app.listen(3005,()=>{
    console.log("server chal raha hai is port per 3005")

})