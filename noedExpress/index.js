const express = require("express")
const app = express();
const port = 3000
app.listen(port, (err)=>{
    err ? console.log("error") : console.log(`listening in progess on port ${port}`) 
})

app.use(express.json())
app.post("/users/:id", (req,res)=>{
    const id = res.params.id
    const foundUser = users.find((data)=>{
        data.id == id
    })
    if (foundUser)
    {
        res.status(200).json({foundUser:foundUser})
    }
    else{
        res.status(404).json("error")
    }
})
const users = [
    {id:1 , name:"salim"},
    {id:2 , name:"ines"}
]


app.post("/users", (res,req)=>{
    const user = req.body
    const newTable = [...users,user]

    res.status(200).json({message:"you user is successfully added" , users:newTable})
})

app.put("/users/:id", (req, res) => {
    const userId = req.params.id;
    const updatedUser = req.body;
    const { id, name } = updatedUser;
    const newUsers = users.map((elt) => {
    if (elt.id == userId) {
    return { ...elt, name };
    } else {
    return elt;
    }
    });
    res.status(200).json({ newUsers: newUsers });
    });

// app.get("/users", (req,res)=>{
//     res.status(200).json({users:users})
// })