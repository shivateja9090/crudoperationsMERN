const { json } = require("body-parser");
var express = require("express");
require("./db/conn")
const student = require("./models/students");
const app = express();
const port=process.env.PORT|| 8000;
app.use(express.json());
//app post
app.post("/students",async (req,res) =>
{

const user = new student(req.body);
try{
await user.save()
    res.send("succes registered");}
catch(e)
{
    res.send(e);
}
})
//app get
app.get("/students", async(req,res)=>{
    try{
        const studentdata = await student.find();
        res.send(studentdata);
    }
    catch(e)
    {
        res.send(e);
    }
})
//app get by id
app.get("/students/:id",async (req,res)=>
{
try{
const id=req.params.id;
const studentdata1= await student.findById({_id:id});
res.send(studentdata1);
}
catch(e){
res.send(e);
}
})

//app update by id
app.patch("/students/:id",async (req,res)=>
{
    try {
        const id=req.params.id;
        const updatestudent = await  student.findByIdAndUpdate({_id:id},req.body,{
            new:true
        });
        res.send(updatestudent);
    }
    catch(e)
    {
        res.status(400).send(e);
    }
})
//app delete by id
app.delete("/students/:id",async(req,res)=>{
    try{
        const id=req.params.id;
        const deletestudent = await student.findByIdAndDelete({_id:id});
        res.send(`user by id ${id} has succesfully deleted`);
    }
    catch(e)
    {
        res.status(400).send(e);
    }
})



//app listening 
app.listen(port ,() =>
{
console.log(`connection is setup at ${port}`);
})