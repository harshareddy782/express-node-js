const express = require("express");

const app = express();

app.use(express.json());
const PORT = 8081;
const toDoList = ["Harsha","Reddy"];
app.get("/todos",(req,res)=>{
    res.status(200).send(toDoList);
})
app.post("/todos",(req,res)=>{
    let newtodolist=req.body.item;
    toDoList.push(newtodolist);
    res.status(201).send({
        message: "Task added succesfully"
    })
})
app.delete("/todos",(req,res)=>{
    const itemtodelete=req.body.item;
    toDoList.find((each,i)=>{
        if(each===itemtodelete)
        toDoList.splice(i,1)
    })
    res.status(204).send({
        message:"Item deleted :-("
    })
})
// will handle all other non-mentioned methods over here
app.all("/todos",(req,res)=>{
    res.status(501).send();
})
// will handle all the un defined url
app.all("*",(req,res)=>{
    res.status(404).send();
})
app.listen(PORT,()=>{
    console.log(`Node Express Server Started Running Succesfully on port ${PORT}`)
})